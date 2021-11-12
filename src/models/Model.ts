import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set: (value: T) => void;
  get: <K extends keyof T>(key: K) => T[K];
  getAll: () => T;
}

interface Sync<T> {
  fetch: (id: number) => AxiosPromise<T>;
  save: (data: T) => AxiosPromise<T>;
}

interface Events {
  on: (eventName: string, callback: () => void) => void;
  trigger: (eventName: string) => void;
}

interface HasId {
  id?: number;
}

class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set = (update: T) => {
    this.attributes.set(update);
    this.events.trigger('change');
  };

  fetch = (): void => {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  };

  save = (): void => {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  };
}

export { Model };
