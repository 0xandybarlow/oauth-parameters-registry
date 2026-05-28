import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthTokenEndpointAuthenticationMethodsPayload } from './interfaces';

export class OAuthTokenEndpointAuthenticationMethodsRegistry extends BaseRegistry<
  OAuthTokenEndpointAuthenticationMethodsPayload,
  'token_endpoint_authentication_method_name'
> {
  constructor() {
    super(
      OAuth.oauth_token_endpoint_authentication_methods,
      'token_endpoint_authentication_method_name',
    );
  }
}
