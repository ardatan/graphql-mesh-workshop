import { IResolvers } from "apollo-server";
import { Sdk } from "../sdk.generated";

export const openBreweryResolvers: IResolvers = {
    Query: {
        findBreweries: async (root, args, context: { sdk: Sdk }, info) => {
            const result = await context.sdk.breweriesQuery({ input: args });
            return result.breweries;
        },
    }
};

