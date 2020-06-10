import { RESTDataSource } from 'apollo-datasource-rest';

export class OpenBreweryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.openbrewerydb.org/';
    }
    findBreweries(args: { by_city: string }) {
        return this.get('breweries', args);
    }
}