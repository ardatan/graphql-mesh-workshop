export const openBreweryTypeDefs = /* GraphQL */`
    type Query {
        findBreweries(by_city: String): [Brewery]
    }
    type Brewery {
        id: ID
        name: String
        brewery_type: String
        street: String
        city: String
        state: String
        postal_code: String
        country: String
        longitude: String
        latitude: String
        phone: String
        website_url: String
        updated_at: String
        tag_list: [String]
    }
`