import { ApolloServer, IResolvers } from 'apollo-server';
import { geoDBTypeDefs } from './geodb/typeDefs';
import { geoDBResolvers } from './geodb/resolvers';
import { GeoDBAPI } from './geodb/dataSource';
import { openBreweryTypeDefs } from './openbrewery/typeDefs';
import { openBreweryResolvers } from './openbrewery/resolvers';
import { OpenBreweryAPI } from './openbrewery/dataSource';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

const linkTypeDefs = /* GraphQL */`
    extend type City {
        breweries: [Brewery]
    }
`;

const linkResolvers: IResolvers = {
    City: {
        breweries: (root, args, context, info) => context.dataSources.openBreweryAPI.findBreweries({ by_city: root.name }),
    }
};

const apolloServer = new ApolloServer({
    typeDefs: mergeTypeDefs([
        geoDBTypeDefs,
        openBreweryTypeDefs,
        linkTypeDefs,
    ]),
    resolvers: mergeResolvers([
        geoDBResolvers,
        openBreweryResolvers,
        linkResolvers,
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
