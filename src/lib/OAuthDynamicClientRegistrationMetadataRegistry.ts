import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthDynamicClientRegistrationMetadataPayload } from './interfaces';

export class OAuthDynamicClientRegistrationMetadataRegistry extends BaseRegistry<OAuthDynamicClientRegistrationMetadataPayload> {
  constructor() {
    super(OAuthRegistry.OauthDynamicClientRegistrationMetadata);
  }

  getParameter(
    parameter: string,
  ): OAuthDynamicClientRegistrationMetadataPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthDynamicClientRegistrationMetadataPayload) =>
        item.client_metadata_name === parameter,
    );
  }
}
