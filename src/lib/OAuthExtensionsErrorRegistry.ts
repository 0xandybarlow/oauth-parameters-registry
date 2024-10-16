import { BaseRegistry } from './BaseRegistry';
import data from '../data/oauth_extensions_error_registry.json';
import { OAuthExtensionsErrorPayload } from './interfaces';

export class OAuthExtensionsErrorRegistry extends BaseRegistry<OAuthExtensionsErrorPayload> {
  constructor() {
    super(data);
  }

  getParameter(parameter: string): OAuthExtensionsErrorPayload | undefined {
    return this.getParametersInternal().find(
      (item: OAuthExtensionsErrorPayload) => item.name === parameter,
    );
  }
}
