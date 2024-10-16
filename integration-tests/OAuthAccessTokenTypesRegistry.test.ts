import { OAuthAccessTokenTypesRegistry } from '../src';
import {
  OAuthAccessTokenTypesPayload,
  RegistryMetadata,
} from '../src/lib/interfaces';

describe('OAuthAccessTokenTypesRegistry', () => {
  let registry: OAuthAccessTokenTypesRegistry;
  beforeEach(() => {
    registry = new OAuthAccessTokenTypesRegistry();
  });

  it('should initialize OAuthAccessTokenTypesRegistry', () => {
    expect(typeof registry).toBe('object');
  });

  describe('getParameter()', () => {
    it('should return a response type by name', () => {
      const responseType: OAuthAccessTokenTypesPayload | undefined =
        registry.getParameter('Bearer');

      expect(responseType).toHaveProperty('name', 'Bearer');
      expect(responseType).toHaveProperty(
        'additional_token_endpoint_response_parameters',
        '',
      );
      expect(responseType).toHaveProperty(
        'http_authentication_scheme',
        'Bearer',
      );
      expect(responseType).toHaveProperty('change_controller', 'IETF');
      expect(responseType).toHaveProperty('reference', 'RFC6750');
    });

    it('should return undefined if the response type is not found', () => {
      const responseType: OAuthAccessTokenTypesPayload | undefined =
        registry.getParameter('invalid');

      expect(responseType).toBeUndefined();
    });
  });

  describe('getParameters()', () => {
    it('should return an array of response types', () => {
      const responseTypes: OAuthAccessTokenTypesPayload[] =
        registry.getParameters();

      expect(responseTypes).toBeInstanceOf(Array);
      expect(responseTypes.length).toBeGreaterThan(0);
      expect(responseTypes[0]).toHaveProperty('name');
      expect(responseTypes[0]).toHaveProperty(
        'additional_token_endpoint_response_parameters',
      );
      expect(responseTypes[0]).toHaveProperty('http_authentication_scheme');
      expect(responseTypes[0]).toHaveProperty('change_controller');
      expect(responseTypes[0]).toHaveProperty('reference');
    });
  });

  describe('getMetadata()', () => {
    it('should return metadata about the registry', () => {
      const metadata: RegistryMetadata = registry.getMetadata();

      expect(typeof metadata.last_processed).toBe('string');
      expect(metadata).toHaveProperty('required_specifications', [
        'RFC6749, RFC8414',
      ]);
      expect(metadata).toHaveProperty(
        'datasource_url',
        'https://www.iana.org/assignments/oauth-parameters/token-types.csv',
      );
    });
  });

  describe('getName()', () => {
    it('should return the name of the registry', () => {
      const name = registry.getName();

      expect(name).toBe('OAuth Access Token Types');
    });
  });
});
