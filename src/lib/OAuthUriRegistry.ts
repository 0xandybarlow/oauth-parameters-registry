import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_uri.json';

export class OAuthUriRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): Record<string, string | undefined> | undefined {
    return this.parameters.find((item) => item.urn === parameter);
  }
}
