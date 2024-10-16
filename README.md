# README

**oauth-parameters-registry** is a Node.js module that provides a registry of OAuth parameters.
The registry is based on the [IANA OAuth Parameters Registry](https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml), which is a registry of parameters registered in the OAuth protocol with IANA. The module provides a simple API for accessing the registry, including methods for getting the name of the registry, the metadata of the registry, a specific parameter by name, and all parameters in the registry.

## Installation

```bash
npm install oauth-parameters-registry
```

## API

### Available Registries

- `OAuthAccessTokenTypesRegistry`
  - A registry of OAuth access token types based on the IANA OAuth Access Token Types Registry.
- `OAuthAuthorizationEndpointResponseTypesRegistry`
  - A registry of OAuth authorization endpoint response types based on the IANA OAuth Authorization Endpoint Response Types Registry.
- `OAuthAuthorizationServerMetadataRegistry`
  - A registry of OAuth authorization server metadata based on the IANA OAuth Authorization Server Metadata Registry.
- `OAuthDynamicClientRegistrationMetadataRegistry`
  - A registry of OAuth dynamic client registration metadata based on the IANA OAuth Dynamic Client Registration Metadata Registry.
- `OAuthExtensionsErrorRegistry`
  - A registry of OAuth extensions error codes based on the IANA OAuth Extensions Error Registry.
- `OAuthParametersRegistry`
  - A registry of OAuth parameters based on the IANA OAuth Parameters Registry.
- `OAuthTokenEndpointAuthenticationMethodsRegistry`
  - A registry of OAuth token endpoint authentication methods based on the IANA OAuth Token Endpoint Authentication Methods Registry.
- `OAuthTokenIntrospectionResponseRegistry`
  - A registry of OAuth token introspection responses based on the IANA OAuth Token Introspection Response Registry.
- `OAuthTokenTypeHintsRegistry`
  - A registry of OAuth token type hints based on the IANA OAuth Token Type Hints Registry.
- `OAuthUriRegistry`
  - A registry of OAuth URIs based on the IANA OAuth URI Registry.
- `PkceCodeChallengeMethodsRegistry`
  - A registry of PKCE code challenge methods based on the IANA PKCE Code Challenge Methods Registry.

### Available Methods

- `getName()`: Returns the name of the registry.
- `getMetadata()`: Returns the metadata of the registry including when the data was last processed, and what RFC defined the Registry and a url to the original CSV data at IANA.
- `getParameter(name)`: Returns a specific parameter by name as an object.
- `getParameters()`: Returns all parameters in the registry as an Array.

## Usage

```js
// Make an instance
const { OAuthParametersRegistry } = require('oauth-parameters-registry');

const oauthRegistry = new OAuthParametersRegistry();

// Get the name of the registry
const name = oauthRegistry.getName();

// Get the metadata of the registry
const metadata = oauthRegistry.getMetadata();

// Get a specific parameter by name
const parameter = oauthRegistry.getParameter('authorization_details');

// Get all parameters of the registry
const parameters = oauthRegistry.getParameters();

console.log({ name, metadata, parameter, parameters });
```

would return;

```js
{
  name: 'OAuth Parameters',
    metadata: {
    required_specifications: [ 'RFC6749' ],
      datasource_url: 'https://www.iana.org/assignments/oauth-parameters/parameters.csv',
      last_processed: '2024-10-16T15:23:43.284Z'
  },
  parameter: {
    name: 'authorization_details',
      parameter_usage_location: 'authorization request, token request, token response',
      change_controller: 'IETF',
      reference: 'RFC9396'
  },
  parameters: [
    {
      name: 'client_id',
      parameter_usage_location: 'authorization request, token request',
      change_controller: 'IETF',
      reference: 'RFC6749'
    },
    {
      name: 'client_secret',
      parameter_usage_location: 'token request',
      change_controller: 'IETF',
      reference: 'RFC6749'
    },
    {
      name: 'response_type',
      parameter_usage_location: 'authorization request',
      change_controller: 'IETF',
      reference: 'RFC6749'
    },
    ...
  ]
}
```
