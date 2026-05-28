import type {
  OAuthAccessTokenTypeEntry,
  OAuthAuthorizationEndpointResponseTypeEntry,
  OAuthAuthorizationServerMetadataEntry,
  OAuthDynamicClientRegistrationMetadataEntry,
  OAuthExtensionsErrorRegistryEntry,
  OAuthParameterEntry,
  OAuthTokenEndpointAuthenticationMethodEntry,
  OAuthTokenIntrospectionResponseEntry,
  OAuthTokenTypeHintEntry,
  OAuthUriEntry,
  PkceCodeChallengeMethodEntry,
  RegistryDataset,
  RegistryEntry,
  RegistryMetadata,
} from 'iana-registry-data-lib';

export type {
  OAuthAccessTokenTypeEntry,
  OAuthAuthorizationEndpointResponseTypeEntry,
  OAuthAuthorizationServerMetadataEntry,
  OAuthDynamicClientRegistrationMetadataEntry,
  OAuthExtensionsErrorRegistryEntry,
  OAuthParameterEntry,
  OAuthTokenEndpointAuthenticationMethodEntry,
  OAuthTokenIntrospectionResponseEntry,
  OAuthTokenTypeHintEntry,
  OAuthUriEntry,
  PkceCodeChallengeMethodEntry,
  RegistryDataset,
  RegistryEntry,
  RegistryMetadata,
};

export type OAuthAuthorizationServerMetadataPayload =
  OAuthAuthorizationServerMetadataEntry;
export type OAuthDynamicClientRegistrationMetadataPayload =
  OAuthDynamicClientRegistrationMetadataEntry;
export type OAuthTokenEndpointAuthenticationMethodsPayload =
  OAuthTokenEndpointAuthenticationMethodEntry;
export type OAuthAccessTokenTypesPayload = OAuthAccessTokenTypeEntry;
export type OAuthAuthorizationEndpointResponseTypesPayload =
  OAuthAuthorizationEndpointResponseTypeEntry;
export type OAuthExtensionsErrorPayload = OAuthExtensionsErrorRegistryEntry;
export type OAuthParametersPayload = OAuthParameterEntry;
export type OAuthPkceCodeChallengeMethodsPayload = PkceCodeChallengeMethodEntry;
export type OAuthTokenIntrospectionResponsePayload =
  OAuthTokenIntrospectionResponseEntry;
export type OAuthTokenTypeHintsPayload = OAuthTokenTypeHintEntry;
export type OAuthUriRegistryPayload = OAuthUriEntry;

export interface Registry<T extends RegistryEntry> {
  getEntry(parameter: string): T | undefined;
  getEntries(): T[];
  getMetadata(): RegistryMetadata;
  getName(): string;
}
