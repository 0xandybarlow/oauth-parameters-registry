import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthPkceCodeChallengeMethodsPayload } from './interfaces';

export class OAuthPkceCodeChallengeMethodsRegistry extends BaseRegistry<
  OAuthPkceCodeChallengeMethodsPayload,
  'code_challenge_method_parameter_name'
> {
  constructor() {
    super(
      OAuth.pkce_code_challenge_methods,
      'code_challenge_method_parameter_name',
    );
  }
}
