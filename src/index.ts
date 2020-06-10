import { ApolloServer } from 'apollo-server';
import { geoDBTypeDefs } from './geodb/typeDefs';
import { geoDBResolvers } from './geodb/resolvers';
import { GeoDBAPI } from './geodb/dataSource';
import { openBreweryTypeDefs } from './openbrewery/typeDefs';
import { openBreweryResolvers } from './openbrewery/resolvers';
import { OpenBreweryAPI } from './openbrewery/dataSource';

const apolloServer = new ApolloServer({
    typeDefs: [
        geoDBTypeDefs,
        openBreweryTypeDefs,
    ],
    resolvers: [
        geoDBResolvers,
        openBreweryResolvers,
    ],
    dataSources: () => ({
        geoDBAPI: new GeoDBAPI(),
        openBreweryAPI: new OpenBreweryAPI(),
    }),
})

apolloServer.listen(4000).then(() => {
    console.info(`Server listening`)
});
