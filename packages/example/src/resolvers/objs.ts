import {  graphqlObjectType } from "nexus-graphql";

export const User = graphqlObjectType({
  name: "User",
  definition(t) {
    t.prismaFields(['*']);
  }
});
