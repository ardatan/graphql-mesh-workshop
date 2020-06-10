import { IResolvers } from "apollo-server";

export const openBreweryResolvers: IResolvers = {
    Query: {
        findBreweries: (root, args, context, info) => context.dataSources.openBreweryAPI.findBreweries(args),
    }
};
