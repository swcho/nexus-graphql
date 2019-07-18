import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'
import { initContext } from './context';

const server = new GraphQLServer({
  schema,
  context: initContext(),
})

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`))
