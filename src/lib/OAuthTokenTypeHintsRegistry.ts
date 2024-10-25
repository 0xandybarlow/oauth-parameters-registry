import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthTokenTypeHintsPayload } from './interfaces';

export class OAuthTokenTypeHintsRegistry extends BaseRegistry<OAuthTokenTypeHintsPayload> {
  constructor() {
    super(OAuthRegistry.OauthTokenTypeHints);
  }

  getParameter(parameter: string): OAuthTokenTypeHintsPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthTokenTypeHintsPayload) => item.hint_value === parameter,
    );
  }
}
