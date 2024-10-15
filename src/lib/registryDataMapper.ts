import oauthAccessTokenTypes from '../data/oauth_access_token_types.json';
import oauthAuthorizationEndpointResponseTypes from '../data/oauth_authorization_endpoint_response_types.json';
import oauthAuthorizationServerMetadata from '../data/oauth_authorization_server_metadata.json';
import oauthDynamicClientRegistrationMetadata from '../data/oauth_dynamic_client_registration_metadata.json';
import oauthExtensionsErrorRegistry from '../data/oauth_extensions_error_registry.json';
import oauthParameters from '../data/oauth_parameters.json';
import oauthTokenEndpointAuthenticationMethods from '../data/oauth_token_endpoint_authentication_methods.json';
import oauthTokenIntrospectionResponse from '../data/oauth_token_introspection_response.json';
import oauthTokenTypeHints from '../data/oauth_token_type_hints.json';
import oauthURI from '../data/oauth_uri.json';
import pkceCodeChallengeMethods from '../data/pkce_code_challenge_methods.json';


export enum RegistryName {
  OAUTH_ACCESS_TOKEN_TYPES = 'oauthAccessTokenTypes',
  OAUTH_AUTHORIZATION_ENDPOINT_RESPONSE_TYPES = 'oauthAuthorizationEndpointResponseTypes',
  OAUTH_AUTHORIZATION_SERVER_METADATA = 'oauthAuthorizationServerMetadata',
  OAUTH_DYNAMIC_CLIENT_REGISTRATION_METADATA = 'oauthDynamicClientRegistrationMetadata',
  OAUTH_EXTENSIONS_ERROR_REGISTRY = 'oauthExtensionsErrorRegistry',
  OAUTH_PARAMETERS = 'oauthParameters',
  OAUTH_TOKEN_ENDPOINT_AUTHENTICATION_METHODS = 'oauthTokenEndpointAuthenticationMethods',
  OAUTH_TOKEN_INTROSPECTION_RESPONSE = 'oauthTokenIntrospectionResponse',
  OAUTH_TOKEN_TYPE_HINTS = 'oauthTokenTypeHints',
  OAUTH_URI = 'oauthURI',
  PKCE_CODE_CHALLENGE_METHODS = 'pkceCodeChallengeMethods',
}

export interface JSONRegistry {
  name: string;
  metadata: RegistryMetadata;
  parameters: Record<string, string | undefined>[];
}

export interface RegistryMetadata {
  required_specifications: string[];
  datasource_url: string;
  last_processed: string;
}

export const registryDataMapper: Record<string, JSONRegistry> = {
  oauthAccessTokenTypes,
  oauthAuthorizationEndpointResponseTypes,
  oauthAuthorizationServerMetadata,
  oauthDynamicClientRegistrationMetadata,
  oauthExtensionsErrorRegistry,
  oauthParameters,
  oauthTokenEndpointAuthenticationMethods,
  oauthTokenIntrospectionResponse,
  oauthTokenTypeHints,
  oauthURI,
  pkceCodeChallengeMethods,
};

