import { BaseRegistry } from './BaseRegistry';
import { OAuthRegistry } from 'iana-registry-data-lib';
import { OAuthAuthorizationServerMetadataPayload } from './interfaces';

export class OAuthAuthorizationServerMetadataRegistry extends BaseRegistry<OAuthAuthorizationServerMetadataPayload> {
  constructor() {
    super(OAuthRegistry.OauthAuthorizationServerMetadata);
  }

  getParameter(
    parameter: string,
  ): OAuthAuthorizationServerMetadataPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthAuthorizationServerMetadataPayload) =>
        item.metadata_name === parameter,
    );
  }
}
