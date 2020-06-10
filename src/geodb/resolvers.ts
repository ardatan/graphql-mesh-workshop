import { IResolvers } from "apollo-server";

export const geoDBResolvers: IResolvers = {
    Query: {
        findCities: (root, args, context, info) => context.dataSources.geoDBAPI.findCities(args),
    }
};
