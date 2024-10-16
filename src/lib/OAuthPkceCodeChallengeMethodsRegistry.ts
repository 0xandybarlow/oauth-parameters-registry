import { BaseRegistry } from './BaseRegistry';
import data from '../data/pkce_code_challenge_methods.json';
import { OAuthPkceCodeChallengeMethodsPayload } from './interfaces';

export class OAuthPkceCodeChallengeMethodsRegistry extends BaseRegistry<OAuthPkceCodeChallengeMethodsPayload> {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): OAuthPkceCodeChallengeMethodsPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthPkceCodeChallengeMethodsPayload) =>
        item.code_challenge_method_parameter_name === parameter,
    );
  }
}
