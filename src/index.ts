import { ApolloServer, IResolvers } from 'apollo-server';
import { geoDBTypeDefs } from './geodb/typeDefs';
import { geoDBResolvers } from './geodb/resolvers';
import { openBreweryTypeDefs } from './openbrewery/typeDefs';
import { openBreweryResolvers } from './openbrewery/resolvers';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { getSdk } from './sdk.generated';
import { findAndParseConfig } from '@graphql-mesh/config';
import { getMesh } from '@graphql-mesh/runtime';

async function start() {

    const meshConfig = await findAndParseConfig();
    const { sdkRequester } = await getMesh(meshConfig);
    const sdk = getSdk(sdkRequester);

    const linkTypeDefs = /* GraphQL */`
        extend type City {
            breweries: [Brewery]
        }
    `;

    const linkResolvers: IResolvers = {
        City: {
            breweries: async (root, args, context, info) => {
                const result = await sdk.breweriesQuery({ input: { by_city: root.name }});
                return result.breweries;
            },
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
        context: {
            sdk,
        }
    })

    apolloServer.listen(4000).then(({ url }) => {
        console.info(`Server listening on : ${url}`)
    });

}

start().catch(err => console.error(err));
