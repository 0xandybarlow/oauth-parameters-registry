import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_token_endpoint_authentication_methods.json';
import { OAuthTokenEndpointAuthenticationMethodsPayload } from './interfaces';

export class OAuthTokenEndpointAuthenticationMethodsRegistry extends BaseRegistry<OAuthTokenEndpointAuthenticationMethodsPayload> {
  constructor() {
    super(data);
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
