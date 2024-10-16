import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_authorization_server_metadata.json';
import { OAuthAuthorizationServerMetadataPayload } from './interfaces';

export class OAuthAuthorizationServerMetadataRegistry extends BaseRegistry<OAuthAuthorizationServerMetadataPayload> {
  constructor() {
    super(data);
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
