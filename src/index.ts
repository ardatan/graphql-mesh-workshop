import { ApolloServer } from 'apollo-server';
import { geoDBTypeDefs } from './geodb/typeDefs';
import { geoDBResolvers } from './geodb/resolvers';
import { GeoDBAPI } from './geodb/dataSource';
import { openBreweryTypeDefs } from './openbrewery/typeDefs';
import { openBreweryResolvers } from './openbrewery/resolvers';
import { OpenBreweryAPI } from './openbrewery/dataSource';
import { GraphQLResolveInfo } from 'graphql';

const linkTypeDefs = /* GraphQL */`
    extend type City {
        breweries: [Brewery]
    }
`;

const linkResolvers = {
    City: {
        breweries: (root: any, args: any, context: any, info: GraphQLResolveInfo) => context.dataSources.openBreweryAPI.findBreweries({ by_city: root.name }),
    }
};

const apolloServer = new ApolloServer({
    typeDefs: [
        geoDBTypeDefs,
        openBreweryTypeDefs,
        linkTypeDefs
    ],
    resolvers: [
        geoDBResolvers,
        openBreweryResolvers,
        linkResolvers,
    ],
    dataSources: () => ({
        geoDBAPI: new GeoDBAPI(),
        openBreweryAPI: new OpenBreweryAPI(),
    }),
})

apolloServer.listen(4000).then(() => {
    console.info(`Server listening`)
});
