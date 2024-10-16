import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_parameters.json';
import { OAuthParametersPayload } from './interfaces';

export class OAuthParametersRegistry extends BaseRegistry<OAuthParametersPayload> {
  constructor() {
    super(data);
  }

  getParameter(parameter: string): OAuthParametersPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthParametersPayload) => item.name === parameter,
    );
  }
}
