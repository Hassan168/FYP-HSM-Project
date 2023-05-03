const { slugify } = require("../utils/functions");
module.exports = ({ createResolvers }) => {
    const resolvers = {
        Match: {
            teams: {
                resolve: async (source, args, context, info) => {
                    const teams = await context.nodeModel.findAll({
                        type: `Team`,
                    });
                    if (!teams) {
                        return;
                    }
                    const result = teams.entries.filter(
                        (team) =>
                            source.teams && source.teams.includes(team.name)
                    );
                    return result;
                },
            },
        },
        Games: {
            categories: {
                resolve: async (source, args, context, info) => {
                    const gameResult = source.categories.map((item) => {
                        return {
                            title: item,
                            slug: slugify(item),
                        };
                    });
                    return gameResult;
                },
            },
        },
        Article: {
            postedAt: {
                resolve: (source) => {
                    return {
                        date: source.postedAt,
                        slug: slugify(source.postedAt),
                    };
                },
            },
            tags: {
                resolve: async (source, _args, context, info) => {
                    var result = source.tags.map((item) => {
                        return {
                            title: item,
                            slug: slugify(item),
                        };
                    });
                    return result;
                },
            },
            categories: {
                resolve: async (source, _args, context, info) => {
                    var result = source.categories.map((item) => {
                        return {
                            title: item,
                            slug: slugify(item),
                        };
                    });
                    return result;
                },
            },
        },
    };
    createResolvers(resolvers);
};
