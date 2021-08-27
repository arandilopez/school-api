import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { graphql } from 'graphql'
import { buildSchema } from 'type-graphql'
import { resolvers } from 'App/Resolvers'

export default class GraphQLController {
  async execute(http: HttpContextContract) {
    try {
      return await this.graphql(http)
    } catch (e) {
      console.log(e)

      return http.response.status(500).json({ errors: [{ message: e.message, status: 500 }] })
    }
  }

  private async graphql(httpContext: HttpContextContract, context: any = {}) {
    const schema = await this.buildSchema()
    const { query, variables } = httpContext.request.all()
    const result = await graphql(schema, query, null, context, variables)

    return httpContext.response.json(result)
  }

  private async buildSchema() {
    return await buildSchema({
      resolvers,
      scalarsMap: []
    })
  }
}
