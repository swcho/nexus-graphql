import { CustomerApi, Configuration, ConfigurationParameters, BookApi, OrderApi, ShipmentApi, UserApi } from "./generated/tslib";

export interface Context {
  apis: {
    book: BookApi;
    customer: CustomerApi;
    order: OrderApi;
    shipment: ShipmentApi;
    user: UserApi;
  }
}

export function initContext(): Context {
  const configParams: ConfigurationParameters = {
    basePath: 'http://localhost:3000/api'
  };
  const config = new Configuration(configParams);
  // config.apiKey = 'special-key'
  return {
    apis: {
      book: new BookApi(config),
      customer: new CustomerApi(config),
      order: new OrderApi(config),
      shipment: new ShipmentApi(config),
      user: new UserApi(config),
    }
  }
}
