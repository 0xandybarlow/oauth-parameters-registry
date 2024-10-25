import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthTokenIntrospectionResponsePayload } from './interfaces';

export class OAuthTokenIntrospectionResponseRegistry extends BaseRegistry<OAuthTokenIntrospectionResponsePayload> {
  constructor() {
    super(OAuthRegistry.OauthTokenIntrospectionResponse);
  }

  getParameter(
    parameter: string,
  ): OAuthTokenIntrospectionResponsePayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthTokenIntrospectionResponsePayload) => item.name === parameter,
    );
  }
}
