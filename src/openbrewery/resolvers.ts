import { GraphQLResolveInfo } from "graphql";

export const openBreweryResolvers = {
    Query: {
        findBreweries: (root: any, args: any, context: any, info: GraphQLResolveInfo) => context.dataSources.openBreweryAPI.findBreweries(args),
    }
};
