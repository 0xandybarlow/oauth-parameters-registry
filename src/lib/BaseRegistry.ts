import { JSONRegistry, Registry, RegistryMetadata } from './interfaces';

export abstract class BaseRegistry<T> implements Registry<T> {
  readonly #data: JSONRegistry;
  readonly #name: string;
  readonly #metadata: RegistryMetadata;
  readonly #parameters: T[];

  protected constructor(data: JSONRegistry) {
    this.#data = data;
    this.#name = this.#data.name;
    this.#metadata = this.#data.metadata;
    this.#parameters = this.#data.parameters as unknown as T[];
  }

  protected getParametersInternal(): T[] {
    return this.#parameters;
  }

  abstract getParameter(parameter: string): T | undefined;

  getParameters(): T[] {
    return this.getParametersInternal();
  }

  getMetadata(): RegistryMetadata {
    return this.#metadata;
  }

  getName(): string {
    return this.#name;
  }
}
