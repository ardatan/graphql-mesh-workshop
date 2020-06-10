import { GraphQLResolveInfo } from "graphql";
import { Sdk } from "../../.mesh";

export const geoDBResolvers = {
    Query: {
        findCities: async (root: any, args: any, context: { sdk: Sdk }, info: GraphQLResolveInfo) => {
            const result = await context.sdk.findCitiesUsingGET_query(args);
            return result.findCitiesUsingGET;
        }
    }
};
