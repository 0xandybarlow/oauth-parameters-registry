import { JSONRegistry, RegistryMetadata } from './interfaces';

export abstract class BaseRegistry {
  #data: JSONRegistry;
  name: string;
  metadata: RegistryMetadata;
  parameters: Record<string, string | undefined>[];

  protected constructor(data: JSONRegistry) {
    this.#data = data;
    this.name = this.#data.name;
    this.metadata = this.#data.metadata;
    this.parameters = this.#data.parameters;
  }

  getParameter(parameter: string) {
    return this.parameters.find((item) => item.name === parameter);
  }

  getParameters(): Record<string, string | undefined>[] {
    return this.parameters;
  }

  getMetadata(): RegistryMetadata {
    return this.metadata;
  }

  getName(): string {
    return this.name;
  }
}
