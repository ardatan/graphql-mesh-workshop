import { Resolvers } from "./types.generated";

export const resolvers: Resolvers = {
    PopulatedPlaceSummary: {
        breweries: (root, args, context, info) => context.OpenBrewery.api.breweries({ input: { by_city: root.name }}),
    }
}