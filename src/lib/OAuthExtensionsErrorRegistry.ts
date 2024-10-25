import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthExtensionsErrorPayload } from './interfaces';

export class OAuthExtensionsErrorRegistry extends BaseRegistry<OAuthExtensionsErrorPayload> {
  constructor() {
    super(OAuthRegistry.OauthExtensionsErrorRegistry);
  }

  getParameter(parameter: string): OAuthExtensionsErrorPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthExtensionsErrorPayload) => item.name === parameter,
    );
  }
}
