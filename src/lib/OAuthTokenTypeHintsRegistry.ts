import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_token_type_hints.json';

export class OAuthTokenTypeHintsRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): Record<string, string | undefined> | undefined {
    return this.parameters.find((item) => item.hint_value === parameter);
  }
}
