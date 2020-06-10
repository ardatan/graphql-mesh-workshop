import { IResolvers } from "apollo-server";

export const openBreweryResolvers: IResolvers = {
    Query: {
        findBreweries: async (root, args, context, info) => {
            const result = await context.sdk.breweriesQuery({ input: args });
            return result.breweries;
        },
    }
};

