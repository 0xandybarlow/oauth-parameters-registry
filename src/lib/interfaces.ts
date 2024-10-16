export interface JSONRegistry {
  name: string;
  metadata: RegistryMetadata;
  parameters: Record<string, string | undefined>[];
}

export interface RegistryMetadata {
  required_specifications: string[];
  datasource_url: string;
  last_processed: string;
}
