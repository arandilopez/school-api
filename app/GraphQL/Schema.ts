import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { graphql, GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { scalarsMap } from './scalarsMap'

const RESOLVERS_PATH = __dirname + '/Resolvers/**/*.ts'
const MUTATIONS_PATH = __dirname + '/Mutations/**/*.ts'

export class Schema {
  private schema: GraphQLSchema;

  async execute(httpContext: HttpContextContract, context: any = {}) {
    const { query, variables } = httpContext.request.all()
    const schema = await this.builtSchema()
    const result = await graphql(schema, query, null, context, variables)

    return httpContext.response.json(result)
  }

  private async builtSchema() {
    return this.schema ||= await buildSchema({
      resolvers: [RESOLVERS_PATH, MUTATIONS_PATH],
      scalarsMap
    })
  }
}
