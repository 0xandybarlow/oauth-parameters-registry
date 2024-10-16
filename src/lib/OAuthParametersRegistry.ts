import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_parameters.json';

export class OAuthParametersRegistry extends BaseRegistry {
  constructor() {
    super(data);
  }
}
