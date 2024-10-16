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

export interface OAuthAuthorizationServerMetadataPayload {
  metadata_name: string;
  metadata_description: string;
  change_controller: string;
  reference: string;
}

export interface OAuthDynamicClientRegistrationMetadataPayload {
  client_metadata_name: string;
  client_metadata_description: string;
  change_controller: string;
  reference: string;
}

export interface OAuthTokenEndpointAuthenticationMethodsPayload {
  token_endpoint_authentication_method_name: string;
  change_controller: string;
  reference: string;
}

export interface OAuthAccessTokenTypesPayload {
  name: string;
  additional_token_endpoint_response_parameters: string;
  http_authentication_scheme: string;
  change_controller: string;
  reference: string;
}

export interface OAuthAuthorizationEndpointResponseTypesPayload {
  name: string;
  change_controller: string;
  reference: string;
}

export interface OAuthExtensionsErrorPayload {
  name: string;
  usage_location: string;
  protocol_extension: string;
  change_controller: string;
  reference: string;
}

export interface OAuthParametersPayload {
  name: string;
  parameter_usage_location: string;
  change_controller: string;
  reference: string;
}

export interface OAuthPkceCodeChallengeMethodsPayload {
  code_challenge_method_parameter_name: string;
  change_controller: string;
  reference: string;
}

export interface OAuthTokenIntrospectionResponsePayload {
  name: string;
  description: string;
  change_controller: string;
  reference: string;
}

export interface OAuthTokenTypeHintsPayload {
  hint_value: string;
  change_controller: string;
  reference: string;
}

export interface OAuthUriRegistryPayload {
  urn: string;
  common_name: string;
  change_controller: string;
  reference: string;
}
export interface Registry<T> {
  getParameter(parameter: string): T | undefined;
  getParameters(): T[];
  getMetadata(): RegistryMetadata;
  getName(): string;
}
