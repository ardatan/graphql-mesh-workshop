import { IResolvers } from "apollo-server";
import { Sdk } from "../sdk.generated";

export const geoDBResolvers: IResolvers = {
    Query: {
        findCities: async (root, args, context: { sdk: Sdk }, info) => {
            const result = await context.sdk.findCitiesUsingGetQuery(args);
            return result.findCitiesUsingGET;
        }
    }
};
