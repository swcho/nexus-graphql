import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'

const server = new GraphQLServer({
  schema,
  context: {},
})

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`))
