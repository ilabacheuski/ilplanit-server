import { ApolloServer, gql } from 'apollo-server-koa'
import Koa from 'koa'
import Router from 'koa-router'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()
const router = new Router()
router.get('/*', async ctx => {
  ctx.body = 'Hello World!'
})
app.use(router.routes())

// server.applyMiddleware({ app })

// tslint:disable-next-line no-console
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
