export const geoDBTypeDefs = /* GraphQL */`
    type Query {
        findCities(namePrefix: String): FindCitiesResponse
    }
    type FindCitiesResponse {
        data: [City]
    }
    type City {
        id: ID
        wikiDataId: String
        type: String
        name: String
        country: String
        countryCode: String
        region: String
        regionCode: String
        latitude: Float
        longitude: Float
    }
`;
