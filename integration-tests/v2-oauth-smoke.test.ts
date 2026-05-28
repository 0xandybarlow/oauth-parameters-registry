import {
  createRegistry,
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

type LegacyRegistryMethods = {
  getParameter?: unknown;
  getParameters?: unknown;
};

describe('v2 OAuth Registry (factory + class)', () => {
  it('factory: creates oauth.parameters registry and exposes dataset metadata', () => {
    const reg = createRegistry('oauth.parameters');
    expect(Array.isArray(reg.getEntries())).toBe(true);
    expect(typeof reg.getName()).toBe('string');
    const meta = reg.getMetadata();
    expect(typeof meta.last_updated_iso).toBe('string');
    expect(reg.getEntry('access_token')).toHaveProperty('name', 'access_token');
  });

  it('class: exposes entry methods only', () => {
    const reg = new OAuthParametersRegistry();
    expect(typeof reg.getName()).toBe('string');
    expect(Array.isArray(reg.getEntries())).toBe(true);
    const meta = reg.getMetadata();
    expect(typeof meta.last_updated_iso).toBe('string');

    const legacy = reg as unknown as LegacyRegistryMethods;
    expect(legacy.getParameters).toBeUndefined();
    expect(legacy.getParameter).toBeUndefined();
  });

  it('initializes every OAuth registry class', () => {
    const registries = [
      new OAuthAccessTokenTypesRegistry(),
      new OAuthAuthorizationEndpointResponseTypesRegistry(),
      new OAuthAuthorizationServerMetadataRegistry(),
      new OAuthDynamicClientRegistrationMetadataRegistry(),
      new OAuthExtensionsErrorRegistry(),
      new OAuthParametersRegistry(),
      new OAuthPkceCodeChallengeMethodsRegistry(),
      new OAuthTokenEndpointAuthenticationMethodsRegistry(),
      new OAuthTokenIntrospectionResponseRegistry(),
      new OAuthTokenTypeHintsRegistry(),
      new OAuthUriRegistry(),
    ];

    for (const registry of registries) {
      expect(registry.getName().length).toBeGreaterThan(0);
      expect(registry.getEntries().length).toBeGreaterThan(0);
      expect(registry.getMetadata()).toHaveProperty('last_updated_iso');
    }
  });
});
