import { OAuthAuthorizationEndpointResponseTypesRegistry } from '../src';
import {
  OAuthAuthorizationEndpointResponseTypesPayload,
  RegistryMetadata,
} from '../src/lib/interfaces';

describe('OAuthAuthorizationEndpointResponseTypesRegistry', () => {
  describe('Library Exports', () => {
    let registry: OAuthAuthorizationEndpointResponseTypesRegistry;
    beforeEach(() => {
      registry = new OAuthAuthorizationEndpointResponseTypesRegistry();
    });

    it('should initialize OAuthAuthorizationEndpointResponseTypesRegistry', () => {
      expect(typeof registry).toBe('object');
    });

    describe('getParameter()', () => {
      it('should return a response type by name', () => {
        const responseType:
          | OAuthAuthorizationEndpointResponseTypesPayload
          | undefined = registry.getParameter('code');

        expect(responseType).toHaveProperty('name', 'code');
        expect(responseType).toHaveProperty('reference', 'RFC6749');
        expect(responseType).toHaveProperty('change_controller', 'IETF');
      });

      it('should return undefined if the response type is not found', () => {
        const responseType:
          | OAuthAuthorizationEndpointResponseTypesPayload
          | undefined = registry.getParameter('invalid');

        expect(responseType).toBeUndefined();
      });
    });

    describe('getParameters()', () => {
      it('should return an array of response types', () => {
        const responseTypes: OAuthAuthorizationEndpointResponseTypesPayload[] =
          registry.getParameters();

        expect(responseTypes).toBeInstanceOf(Array);
        expect(responseTypes.length).toBeGreaterThan(0);
        expect(responseTypes[0]).toHaveProperty('name');
        expect(responseTypes[0]).toHaveProperty('reference');
        expect(responseTypes[0]).toHaveProperty('change_controller');
      });
    });

    describe('getMetadata()', () => {
      it('should return metadata about the registry', () => {
        const metadata: RegistryMetadata = registry.getMetadata();

        expect(typeof metadata.last_processed).toBe('string');
        expect(metadata).toHaveProperty('required_specifications', ['RFC6749']);
        expect(metadata).toHaveProperty(
          'datasource_url',
          'https://www.iana.org/assignments/oauth-parameters/endpoint.csv',
        );
      });
    });

    describe('getName()', () => {
      it('should return the name of the registry', () => {
        const name = registry.getName();

        expect(name).toBe('OAuth Authorization Endpoint Response Types');
      });
    });
  });
});
