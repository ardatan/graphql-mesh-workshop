import { ApolloServer } from 'apollo-server';
import { geoDBTypeDefs } from './geodb/typeDefs';
import { geoDBResolvers } from './geodb/resolvers';
import { GeoDBAPI } from './geodb/dataSource';
import { openBreweryTypeDefs } from './openbrewery/typeDefs';
import { openBreweryResolvers } from './openbrewery/resolvers';
import { OpenBreweryAPI } from './openbrewery/dataSource';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

const apolloServer = new ApolloServer({
    typeDefs: mergeTypeDefs([
        geoDBTypeDefs,
        openBreweryTypeDefs,
    ]),
    resolvers: mergeResolvers([
        geoDBResolvers,
        openBreweryResolvers,
    ]),
    dataSources: () => {
        return {
            geoDBAPI: new GeoDBAPI(),
            openBreweryAPI: new OpenBreweryAPI(),
        }
    },
})

apolloServer.listen(4000).then(({ url }) => {
    console.info(`Server listening on : ${url}`)
});
