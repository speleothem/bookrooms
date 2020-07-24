export const resolvers = {
  Query: {
    // @ts-ignore
    me: (_, __, { dataSources }): Record<string, any> =>
      dataSources.userAPI.findOrCreateUser(),
  },
};
