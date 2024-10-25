import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthAccessTokenTypesPayload } from './interfaces';

export class OAuthAccessTokenTypesRegistry extends BaseRegistry<OAuthAccessTokenTypesPayload> {
  constructor() {
    super(OAuthRegistry.OauthAccessTokenTypes);
  }

  getParameter(parameter: string): OAuthAccessTokenTypesPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthAccessTokenTypesPayload) => item.name === parameter,
    );
  }
}
