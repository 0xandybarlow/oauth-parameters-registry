import {
  OAuthAccessTokenTypesRegistry,
  OAuthAuthorizationEndpointResponseTypesRegistry,
  OAuthAuthorizationServerMetadataRegistry,
  OAuthDynamicClientRegistrationMetadataRegistry,
  OAuthExtensionsErrorRegistry,
  OAuthParametersRegistry,
  OAuthPkceCodeChallengeMethodsRegistry,
  OAuthTokenEndpointAuthenticationMethodsRegistry,
  OAuthTokenIntrospectionResponseRegistry,
  OAuthTokenTypeHintsRegistry,
  OAuthUriRegistry,
} from '../src';

describe('Integration Tests for oauth-parameters-registry', () => {
  describe('Library Exports', () => {
    it('should initialize OAuthAuthorizationEndpointResponseTypesRegistry', () => {
      const registry = new OAuthAuthorizationEndpointResponseTypesRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthAccessTokenTypesRegistry', () => {
      const registry = new OAuthAccessTokenTypesRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthAuthorizationServerMetadataRegistry', () => {
      const registry = new OAuthAuthorizationServerMetadataRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthDynamicClientRegistrationMetadataRegistry', () => {
      const registry = new OAuthDynamicClientRegistrationMetadataRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthExtensionsErrorRegistry', () => {
      const registry = new OAuthExtensionsErrorRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthParametersRegistry', () => {
      const registry = new OAuthParametersRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthTokenEndpointAuthenticationMethodsRegistry', () => {
      const registry = new OAuthTokenEndpointAuthenticationMethodsRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthTokenIntrospectionResponseRegistry', () => {
      const registry = new OAuthTokenIntrospectionResponseRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthTokenTypeHintsRegistry', () => {
      const registry = new OAuthTokenTypeHintsRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthUriRegistry', () => {
      const registry = new OAuthUriRegistry();
      expect(typeof registry).toBe('object');
    });

    it('should initialize OAuthPkceCodeChallengeMethodsRegistry', () => {
      const registry = new OAuthPkceCodeChallengeMethodsRegistry();
      expect(typeof registry).toBe('object');
    });
  });
});
