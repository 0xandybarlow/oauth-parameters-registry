import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_token_introspection_response.json';
import { OAuthTokenIntrospectionResponsePayload } from './interfaces';

export class OAuthTokenIntrospectionResponseRegistry extends BaseRegistry<OAuthTokenIntrospectionResponsePayload> {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): OAuthTokenIntrospectionResponsePayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthTokenIntrospectionResponsePayload) => item.name === parameter,
    );
  }
}
