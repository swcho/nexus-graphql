import { PetApi, Configuration, ConfigurationParameters } from "./generated/tslib";

export interface Context {
  apis: {
    pet: PetApi;
  }
}

export function initContext(): Context {
  const configParams: ConfigurationParameters = {};
  const config = new Configuration(configParams);
  config.apiKey = 'special-key'
  return {
    apis: {
      pet: new PetApi(config),
    }
  }
}
