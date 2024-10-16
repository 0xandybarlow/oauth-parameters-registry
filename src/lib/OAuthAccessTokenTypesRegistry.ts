import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_access_token_types.json';

export class OAuthAccessTokenTypesRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }
}
