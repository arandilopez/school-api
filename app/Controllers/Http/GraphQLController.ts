import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { graphql } from 'graphql'
import { buildSchema } from 'type-graphql'
import { resolvers } from 'App/Resolvers'

export default class GraphQLController {
  async execute({ request, response }: HttpContextContract) {
    const schema = await buildSchema({ resolvers })

    const { query, variables } = request.all()
    const context = {}

    const data = await graphql(schema, query, null, context, variables)

    return response.json(data)
  }
}
