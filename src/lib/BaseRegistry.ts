import type {
  Registry,
  RegistryDataset,
  RegistryEntry,
  RegistryMetadata,
} from './interfaces';

export class BaseRegistry<E extends RegistryEntry, K extends string>
  implements Registry<E>
{
  readonly #dataset: RegistryDataset<E>;
  readonly #idKey: K;

  constructor(dataset: RegistryDataset<E>, idKey: K) {
    if (!dataset || dataset.schema_version !== 2) {
      throw new Error('Unsupported dataset: expected schema_version 2');
    }
    this.#dataset = dataset;
    this.#idKey = idKey;
  }

  protected getEntriesInternal(): E[] {
    return this.#dataset.entries;
  }

  getEntry(value: string): E | undefined {
    return this.getEntriesInternal().find(
      (entry) =>
        (entry as RegistryEntry & Record<K, unknown>)[this.#idKey] === value,
    );
  }

  getEntries(): E[] {
    return this.getEntriesInternal();
  }

  getMetadata(): RegistryMetadata {
    return this.#dataset.metadata;
  }

  getName(): string {
    return this.#dataset.name;
  }
}
