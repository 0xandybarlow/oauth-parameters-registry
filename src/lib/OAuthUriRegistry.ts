import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_uri.json';
import { OAuthUriRegistryPayload } from './interfaces';

export class OAuthUriRegistry extends BaseRegistry<OAuthUriRegistryPayload> {
  constructor() {
    super(data);
  }

  getParameter(parameter: string): OAuthUriRegistryPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthUriRegistryPayload) => item.urn === parameter,
    );
  }

  getParameters(): OAuthUriRegistryPayload[] {
    return this.getParametersInternal();
  }
}
