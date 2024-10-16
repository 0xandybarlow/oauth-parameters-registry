import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_authorization_endpoint_response_types.json';

export class OAuthAuthorizationEndpointResponseTypesRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }
}
