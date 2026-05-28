import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthExtensionsErrorPayload } from './interfaces';

export class OAuthExtensionsErrorRegistry extends BaseRegistry<
  OAuthExtensionsErrorPayload,
  'name'
> {
  constructor() {
    super(OAuth.oauth_extensions_error_registry, 'name');
  }
}
