import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthAuthorizationEndpointResponseTypesPayload } from './interfaces';

export class OAuthAuthorizationEndpointResponseTypesRegistry extends BaseRegistry<OAuthAuthorizationEndpointResponseTypesPayload> {
  constructor() {
    super(OAuthRegistry.OauthAuthorizationEndpointResponseTypes);
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
