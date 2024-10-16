import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_authorization_endpoint_response_types.json';
import { OAuthAuthorizationEndpointResponseTypesPayload } from './interfaces';

export class OAuthAuthorizationEndpointResponseTypesRegistry extends BaseRegistry<OAuthAuthorizationEndpointResponseTypesPayload> {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): OAuthAuthorizationEndpointResponseTypesPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthAuthorizationEndpointResponseTypesPayload) =>
        item.name === parameter,
    );
  }
}
