## Running build
`npm run build` will compile the scripts over to JS, and then run the import script. The import script will do the conversions from csv to json and dump the data files in the src and dist folders.

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
