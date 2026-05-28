import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthTokenIntrospectionResponsePayload } from './interfaces';

export class OAuthTokenIntrospectionResponseRegistry extends BaseRegistry<
  OAuthTokenIntrospectionResponsePayload,
  'name'
> {
  constructor() {
    super(OAuth.oauth_token_introspection_response, 'name');
  }
}
