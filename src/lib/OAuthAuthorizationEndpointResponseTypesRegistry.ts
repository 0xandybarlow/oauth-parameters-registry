import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthAuthorizationEndpointResponseTypesPayload } from './interfaces';

export class OAuthAuthorizationEndpointResponseTypesRegistry extends BaseRegistry<
  OAuthAuthorizationEndpointResponseTypesPayload,
  'name'
> {
  constructor() {
    super(OAuth.oauth_authorization_endpoint_response_types, 'name');
  }
}
