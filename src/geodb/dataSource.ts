import { RESTDataSource } from 'apollo-datasource-rest';

export class GeoDBAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://geodb-free-service.wirefreethought.com/v1/geo/';
    }
    findCities(args: { namePrefix: string }) {
        return this.get('cities', args);
    }
}