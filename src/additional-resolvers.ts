import { Resolvers } from "../.mesh";

export const resolvers: Resolvers = {
    PopulatedPlaceSummary: {
        breweries: (root, args, context, info) => context.OpenBrewery.Query.breweries({
            root,
            args: { input: { by_city: root.name } },
            context,
            info
        }),
    }
}