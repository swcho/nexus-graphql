import { prismaObjectType } from "nexus-graphql";

export const User = prismaObjectType({
  name: "User",
  definition(t) {
    t.prismaFields(['*']);
  }
});
