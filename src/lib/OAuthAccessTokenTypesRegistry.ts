import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthAccessTokenTypesPayload } from './interfaces';

export class OAuthAccessTokenTypesRegistry extends BaseRegistry<
  OAuthAccessTokenTypesPayload,
  'name'
> {
  constructor() {
    super(OAuth.oauth_access_token_types, 'name');
  }
}
