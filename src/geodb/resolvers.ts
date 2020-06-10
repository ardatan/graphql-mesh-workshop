import { IResolvers } from "apollo-server";

export const geoDBResolvers: IResolvers = {
    Query: {
        findCities: async (root, args, context, info) => {
            const result = await context.sdk.findCitiesUsingGetQuery(args);
            return result.findCitiesUsingGET;
        }
    }
};
