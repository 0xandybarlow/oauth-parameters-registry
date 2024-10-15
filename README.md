```js
// Make an instance
const oauthRegistry = new OAuthRegistry('oauthParameters');

// Get the name of the registry
const name = oauthRegistry.getName();

// Get the metadata of the registry
const metadata = oauthRegistry.getMetadata();

// Get all parameters of the registry
const parameters = oauthRegistry.getParameters();

// Get a specific parameter by name
const parameter = oauthRegistry.getParameter('authorization_details');
```
