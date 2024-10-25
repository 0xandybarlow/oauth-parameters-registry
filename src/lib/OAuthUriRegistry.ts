import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthUriRegistryPayload } from './interfaces';

export class OAuthUriRegistry extends BaseRegistry<OAuthUriRegistryPayload> {
  constructor() {
    super(OAuthRegistry.OauthUri);
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
