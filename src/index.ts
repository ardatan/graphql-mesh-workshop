import { ApolloServer } from 'apollo-server';
import { geoDBTypeDefs } from './geodb/typeDefs';
import { geoDBResolvers } from './geodb/resolvers';
import { openBreweryTypeDefs } from './openbrewery/typeDefs';
import { openBreweryResolvers } from './openbrewery/resolvers';
import { getMeshSDK, Sdk } from '../.mesh';
import { GraphQLResolveInfo } from 'graphql';

const sdk$ = getMeshSDK();

const linkTypeDefs = /* GraphQL */`
    extend type City {
        breweries: [Brewery]
    }
`;

const linkResolvers = {
    City: {
        breweries: async (root: any, args: any, { sdk }: { sdk: Sdk }, info: GraphQLResolveInfo) => {
            const result = await sdk.breweries_query({ input: { by_city: root.name } });
            return result.breweries;
        },
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
    context: async () => ({
        sdk: await sdk$,
    })
})

apolloServer.listen(4000).then(() => {
    console.info(`Server listening`)
});

