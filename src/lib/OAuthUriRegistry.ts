import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthUriRegistryPayload } from './interfaces';

export class OAuthUriRegistry extends BaseRegistry<
  OAuthUriRegistryPayload,
  'urn'
> {
  constructor() {
    super(OAuth.oauth_uri, 'urn');
  }
}
