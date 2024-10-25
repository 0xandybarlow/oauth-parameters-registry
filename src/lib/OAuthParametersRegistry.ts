import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthParametersPayload } from './interfaces';

export class OAuthParametersRegistry extends BaseRegistry<OAuthParametersPayload> {
  constructor() {
    super(OAuthRegistry.OauthParameters);
  }

  getParameter(parameter: string): OAuthParametersPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthParametersPayload) => item.name === parameter,
    );
  }
}
