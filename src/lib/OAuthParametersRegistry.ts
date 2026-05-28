import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthParametersPayload } from './interfaces';

export class OAuthParametersRegistry extends BaseRegistry<
  OAuthParametersPayload,
  'name'
> {
  constructor() {
    super(OAuth.oauth_parameters, 'name');
  }
}
