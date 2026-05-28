import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthTokenTypeHintsPayload } from './interfaces';

export class OAuthTokenTypeHintsRegistry extends BaseRegistry<
  OAuthTokenTypeHintsPayload,
  'hint_value'
> {
  constructor() {
    super(OAuth.oauth_token_type_hints, 'hint_value');
  }
}
