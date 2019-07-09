import { GraphQLServer } from 'graphql-yoga'

const server = new GraphQLServer({
  // schema,
  // context: { prisma },
})

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`))
