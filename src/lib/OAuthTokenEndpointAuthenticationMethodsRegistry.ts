import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthTokenEndpointAuthenticationMethodsPayload } from './interfaces';

export class OAuthTokenEndpointAuthenticationMethodsRegistry extends BaseRegistry<OAuthTokenEndpointAuthenticationMethodsPayload> {
  constructor() {
    super(OAuthRegistry.OauthTokenEndpointAuthenticationMethods);
  }

  getParameter(
    parameter: string,
  ): OAuthTokenEndpointAuthenticationMethodsPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthTokenEndpointAuthenticationMethodsPayload) =>
        item.token_endpoint_authentication_method_name === parameter,
    );
  }
}
