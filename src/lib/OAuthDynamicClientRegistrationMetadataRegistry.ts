import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthDynamicClientRegistrationMetadataPayload } from './interfaces';

export class OAuthDynamicClientRegistrationMetadataRegistry extends BaseRegistry<
  OAuthDynamicClientRegistrationMetadataPayload,
  'client_metadata_name'
> {
  constructor() {
    super(
      OAuth.oauth_dynamic_client_registration_metadata,
      'client_metadata_name',
    );
  }
}
