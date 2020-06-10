import { GraphQLResolveInfo } from "graphql";
import { Sdk } from "../../.mesh";

export const openBreweryResolvers = {
    Query: {
        findBreweries: async (root: any, args: any, context: { sdk: Sdk }, info: GraphQLResolveInfo) => {
            const result = await context.sdk.breweries_query({ input: args });
            return result.breweries;
        },
    }
};

