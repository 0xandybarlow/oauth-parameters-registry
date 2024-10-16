import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_authorization_server_metadata.json';

export class OAuthAuthorizationServerMetadataRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }

  getParameter(
    parameter: string,
  ): Record<string, string | undefined> | undefined {
    return this.parameters.find((item) => item.metadata_name === parameter);
  }
}
