import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_token_type_hints.json';
import { OAuthTokenTypeHintsPayload } from './interfaces';

export class OAuthTokenTypeHintsRegistry extends BaseRegistry<OAuthTokenTypeHintsPayload> {
  constructor() {
    super(data);
  }

  getParameter(parameter: string): OAuthTokenTypeHintsPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthTokenTypeHintsPayload) => item.hint_value === parameter,
    );
  }
}
