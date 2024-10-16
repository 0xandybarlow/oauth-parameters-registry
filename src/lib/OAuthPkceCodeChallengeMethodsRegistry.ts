import { BaseRegistry } from './BaseRegistry';
import data from '../data/pkce_code_challenge_methods.json';

export class OAuthPkceCodeChallengeMethodsRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): Record<string, string | undefined> | undefined {
    return this.parameters.find(
      (item) => item.code_challenge_method_parameter_name === parameter,
    );
  }
}
