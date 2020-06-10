import { GraphQLResolveInfo } from "graphql";

export const geoDBResolvers = {
    Query: {
        findCities: (root: any, args: any, context: any, info: GraphQLResolveInfo) => context.dataSources.geoDBAPI.findCities(args),
    }
};
