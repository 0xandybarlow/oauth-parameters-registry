import { JSONRegistry, registryDataMapper, RegistryMetadata, RegistryName } from './registryDataMapper';

export class OAuthRegistry {
  #data: JSONRegistry;
  name: string;
  metadata: RegistryMetadata;
  parameters: Record<string, string | undefined>[];

  constructor(registryName: RegistryName) {
    const data = registryDataMapper[registryName];
    if (!data) {
      throw new Error(`Registry with name ${registryName} not found.`);
    }
    this.#data = data;
    this.name = this.#data.name;
    this.metadata = this.#data.metadata;
    this.parameters = this.#data.parameters;
  }

  getParameter(parameter: string) {
    return this.parameters.find((item) => item.name === parameter);
  }

  getMetadata(): RegistryMetadata {
    return this.metadata;
  }

  getParameters(): Record<string, string | undefined>[] {
    return this.parameters;
  }

  getName(): string {
    return this.name;
  }
}
