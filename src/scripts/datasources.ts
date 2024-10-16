import { RegistryMetadata } from './interfaces/RegistryMetadata';

export const datasources: RegistryMetadata[] = [
  {
    name: 'OAuth Access Token Types',
    url: 'https://www.iana.org/assignments/oauth-parameters/token-types.csv',
    required_specifications: ['RFC6749, RFC8414'],
  },
  {
    name: 'OAuth Authorization Endpoint Response Types',
    url: 'https://www.iana.org/assignments/oauth-parameters/endpoint.csv',
    required_specifications: ['RFC6749'],
  },
  {
    name: 'OAuth Extensions Error Registry',
    url: 'https://www.iana.org/assignments/oauth-parameters/extensions-error.csv',
    required_specifications: ['RFC6749'],
  },
  {
    name: 'OAuth Parameters',
    url: 'https://www.iana.org/assignments/oauth-parameters/parameters.csv',
    required_specifications: ['RFC6749'],
  },
  {
    name: 'OAuth Token Type Hints',
    url: 'https://www.iana.org/assignments/oauth-parameters/token-type-hint.csv',
    required_specifications: ['RFC7009'],
  },
  {
    name: 'OAuth URI',
    url: 'https://www.iana.org/assignments/oauth-parameters/uri.csv',
    required_specifications: ['RFC6755'],
  },
  {
    name: 'OAuth Dynamic Client Registration Metadata',
    url: 'https://www.iana.org/assignments/oauth-parameters/client-metadata.csv',
    required_specifications: ['RFC7591'],
  },
  {
    name: 'OAuth Token Endpoint Authentication Methods',
    url: 'https://www.iana.org/assignments/oauth-parameters/token-endpoint-auth-method.csv',
    required_specifications: ['RFC7591', 'RFC8414'],
  },
  {
    name: 'PKCE Code Challenge Methods',
    url: 'https://www.iana.org/assignments/oauth-parameters/pkce-code-challenge-method.csv',
    required_specifications: ['RFC7636'],
  },
  {
    name: 'OAuth Token Introspection Response',
    url: 'https://www.iana.org/assignments/oauth-parameters/token-introspection-response.csv',
    required_specifications: ['RFC7662'],
  },
  {
    name: 'OAuth Authorization Server Metadata',
    url: 'https://www.iana.org/assignments/oauth-parameters/authorization-server-metadata.csv',
    required_specifications: ['RFC8414'],
  },
];
