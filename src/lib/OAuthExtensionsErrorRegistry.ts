import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_extensions_error_registry.json';

export class OAuthExtensionsErrorRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }
}
