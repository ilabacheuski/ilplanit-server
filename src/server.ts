import Koa from 'koa'
import Router from 'koa-router'
import { ApolloServer, gql } from 'apollo-server-koa'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()
const router = new Router()
router.get('/*', async ctx => {
  ctx.body = 'Hello World!'
})
app.use(router.routes())

// server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
