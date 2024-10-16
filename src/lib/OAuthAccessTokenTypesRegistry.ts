import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_access_token_types.json';
import { OAuthAccessTokenTypesPayload } from './interfaces';

export class OAuthAccessTokenTypesRegistry extends BaseRegistry<OAuthAccessTokenTypesPayload> {
  constructor() {
    super(data);
  }

  getParameter(parameter: string): OAuthAccessTokenTypesPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthAccessTokenTypesPayload) => item.name === parameter,
    );
  }
}
