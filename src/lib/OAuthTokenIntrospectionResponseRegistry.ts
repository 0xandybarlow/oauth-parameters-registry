import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_token_introspection_response.json';

export class OAuthTokenIntrospectionResponseRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }
}
