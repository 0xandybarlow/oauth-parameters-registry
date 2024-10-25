import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthPkceCodeChallengeMethodsPayload } from './interfaces';

export class OAuthPkceCodeChallengeMethodsRegistry extends BaseRegistry<OAuthPkceCodeChallengeMethodsPayload> {
  constructor() {
    super(OAuthRegistry.PkceCodeChallengeMethods);
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
