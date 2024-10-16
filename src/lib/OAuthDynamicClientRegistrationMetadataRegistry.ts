import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_dynamic_client_registration_metadata.json';
import { OAuthDynamicClientRegistrationMetadataPayload } from './interfaces';

export class OAuthDynamicClientRegistrationMetadataRegistry extends BaseRegistry<OAuthDynamicClientRegistrationMetadataPayload> {
  constructor() {
    super(data);
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
