import { OAuth } from 'iana-registry-data-lib';
import { BaseRegistry } from './BaseRegistry';
import type {
  OAuthAccessTokenTypesPayload,
  OAuthAuthorizationEndpointResponseTypesPayload,
  OAuthAuthorizationServerMetadataPayload,
  OAuthDynamicClientRegistrationMetadataPayload,
  OAuthExtensionsErrorPayload,
  OAuthParametersPayload,
  OAuthPkceCodeChallengeMethodsPayload,
  OAuthTokenEndpointAuthenticationMethodsPayload,
  OAuthTokenIntrospectionResponsePayload,
  OAuthTokenTypeHintsPayload,
  OAuthUriRegistryPayload,
  RegistryDataset,
} from './interfaces';

// IDs for OAuth registries (initial coverage)
export type RegistryId =
  | 'oauth.parameters'
  | 'oauth.access_token_types'
  | 'oauth.authorization_endpoint_response_types'
  | 'oauth.authorization_server_metadata'
  | 'oauth.dynamic_client_registration_metadata'
  | 'oauth.extensions_error_registry'
  | 'oauth.token_endpoint_authentication_methods'
  | 'oauth.token_introspection_response'
  | 'oauth.token_type_hints'
  | 'oauth.uri'
  | 'oauth.pkce_code_challenge_methods';

export type PayloadById = {
  'oauth.parameters': OAuthParametersPayload;
  'oauth.access_token_types': OAuthAccessTokenTypesPayload;
  'oauth.authorization_endpoint_response_types': OAuthAuthorizationEndpointResponseTypesPayload;
  'oauth.authorization_server_metadata': OAuthAuthorizationServerMetadataPayload;
  'oauth.dynamic_client_registration_metadata': OAuthDynamicClientRegistrationMetadataPayload;
  'oauth.extensions_error_registry': OAuthExtensionsErrorPayload;
  'oauth.token_endpoint_authentication_methods': OAuthTokenEndpointAuthenticationMethodsPayload;
  'oauth.token_introspection_response': OAuthTokenIntrospectionResponsePayload;
  'oauth.token_type_hints': OAuthTokenTypeHintsPayload;
  'oauth.uri': OAuthUriRegistryPayload;
  'oauth.pkce_code_challenge_methods': OAuthPkceCodeChallengeMethodsPayload;
};

type LookupKeyById = {
  'oauth.parameters': 'name';
  'oauth.access_token_types': 'name';
  'oauth.authorization_endpoint_response_types': 'name';
  'oauth.authorization_server_metadata': 'metadata_name';
  'oauth.dynamic_client_registration_metadata': 'client_metadata_name';
  'oauth.extensions_error_registry': 'name';
  'oauth.token_endpoint_authentication_methods': 'token_endpoint_authentication_method_name';
  'oauth.token_introspection_response': 'name';
  'oauth.token_type_hints': 'hint_value';
  'oauth.uri': 'urn';
  'oauth.pkce_code_challenge_methods': 'code_challenge_method_parameter_name';
};

type RegistryConfig<I extends RegistryId> = {
  dataset: RegistryDataset<PayloadById[I]>;
  idKey: LookupKeyById[I];
};

const map = {
  'oauth.parameters': {
    dataset: OAuth.oauth_parameters,
    idKey: 'name' as const,
  },
  'oauth.access_token_types': {
    dataset: OAuth.oauth_access_token_types,
    idKey: 'name' as const,
  },
  'oauth.authorization_endpoint_response_types': {
    dataset: OAuth.oauth_authorization_endpoint_response_types,
    idKey: 'name' as const,
  },
  'oauth.authorization_server_metadata': {
    dataset: OAuth.oauth_authorization_server_metadata,
    idKey: 'metadata_name' as const,
  },
  'oauth.dynamic_client_registration_metadata': {
    dataset: OAuth.oauth_dynamic_client_registration_metadata,
    idKey: 'client_metadata_name' as const,
  },
  'oauth.extensions_error_registry': {
    dataset: OAuth.oauth_extensions_error_registry,
    idKey: 'name' as const,
  },
  'oauth.token_endpoint_authentication_methods': {
    dataset: OAuth.oauth_token_endpoint_authentication_methods,
    idKey: 'token_endpoint_authentication_method_name' as const,
  },
  'oauth.token_introspection_response': {
    dataset: OAuth.oauth_token_introspection_response,
    idKey: 'name' as const,
  },
  'oauth.token_type_hints': {
    dataset: OAuth.oauth_token_type_hints,
    idKey: 'hint_value' as const,
  },
  'oauth.uri': {
    dataset: OAuth.oauth_uri,
    idKey: 'urn' as const,
  },
  'oauth.pkce_code_challenge_methods': {
    dataset: OAuth.pkce_code_challenge_methods,
    idKey: 'code_challenge_method_parameter_name' as const,
  },
} satisfies { [I in RegistryId]: RegistryConfig<I> };

export function createRegistry(
  id: 'oauth.parameters',
): BaseRegistry<OAuthParametersPayload, 'name'>;
export function createRegistry(
  id: 'oauth.access_token_types',
): BaseRegistry<OAuthAccessTokenTypesPayload, 'name'>;
export function createRegistry(
  id: 'oauth.authorization_endpoint_response_types',
): BaseRegistry<OAuthAuthorizationEndpointResponseTypesPayload, 'name'>;
export function createRegistry(
  id: 'oauth.authorization_server_metadata',
): BaseRegistry<OAuthAuthorizationServerMetadataPayload, 'metadata_name'>;
export function createRegistry(
  id: 'oauth.dynamic_client_registration_metadata',
): BaseRegistry<
  OAuthDynamicClientRegistrationMetadataPayload,
  'client_metadata_name'
>;
export function createRegistry(
  id: 'oauth.extensions_error_registry',
): BaseRegistry<OAuthExtensionsErrorPayload, 'name'>;
export function createRegistry(
  id: 'oauth.token_endpoint_authentication_methods',
): BaseRegistry<
  OAuthTokenEndpointAuthenticationMethodsPayload,
  'token_endpoint_authentication_method_name'
>;
export function createRegistry(
  id: 'oauth.token_introspection_response',
): BaseRegistry<OAuthTokenIntrospectionResponsePayload, 'name'>;
export function createRegistry(
  id: 'oauth.token_type_hints',
): BaseRegistry<OAuthTokenTypeHintsPayload, 'hint_value'>;
export function createRegistry(
  id: 'oauth.uri',
): BaseRegistry<OAuthUriRegistryPayload, 'urn'>;
export function createRegistry(
  id: 'oauth.pkce_code_challenge_methods',
): BaseRegistry<
  OAuthPkceCodeChallengeMethodsPayload,
  'code_challenge_method_parameter_name'
>;
export function createRegistry(
  id: RegistryId,
): BaseRegistry<PayloadById[RegistryId], LookupKeyById[RegistryId]>;
export function createRegistry(
  id: RegistryId,
): BaseRegistry<PayloadById[RegistryId], LookupKeyById[RegistryId]> {
  switch (id) {
    case 'oauth.parameters':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.access_token_types':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.authorization_endpoint_response_types':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.authorization_server_metadata':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.dynamic_client_registration_metadata':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.extensions_error_registry':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.token_endpoint_authentication_methods':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.token_introspection_response':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.token_type_hints':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.uri':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    case 'oauth.pkce_code_challenge_methods':
      return new BaseRegistry(map[id].dataset, map[id].idKey);
    default:
      throw new Error(`Unknown registry id: ${id satisfies never}`);
  }
}
