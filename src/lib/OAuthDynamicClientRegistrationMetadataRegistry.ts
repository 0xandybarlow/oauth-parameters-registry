import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_dynamic_client_registration_metadata.json';

export class OAuthDynamicClientRegistrationMetadataRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): Record<string, string | undefined> | undefined {
    return this.parameters.find(
      (item) => item.client_metadata_name === parameter,
    );
  }
}
