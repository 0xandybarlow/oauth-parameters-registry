import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_token_endpoint_authentication_methods.json';

export class OAuthTokenEndpointAuthenticationMethodsRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): Record<string, string | undefined> | undefined {
    return this.parameters.find(
      (item) => item.token_endpoint_authentication_method_name === parameter,
    );
  }
}
