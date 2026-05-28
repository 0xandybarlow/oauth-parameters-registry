import { BaseRegistry } from './BaseRegistry';
import { OAuth } from 'iana-registry-data-lib';
import type { OAuthAuthorizationServerMetadataPayload } from './interfaces';

export class OAuthAuthorizationServerMetadataRegistry extends BaseRegistry<
  OAuthAuthorizationServerMetadataPayload,
  'metadata_name'
> {
  constructor() {
    super(OAuth.oauth_authorization_server_metadata, 'metadata_name');
  }
}
