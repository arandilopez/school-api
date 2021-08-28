import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { graphql } from 'graphql'
import { buildSchema } from 'type-graphql'
import { scalarsMap } from './scalarsMap'

export class Schema {

  async execute(httpContext: HttpContextContract, context: any = {}) {
    const schema = await this.buildSchema()
    const { query, variables } = httpContext.request.all()
    const result = await graphql(schema, query, null, context, variables)

    return httpContext.response.json(result)
  }


  private async buildSchema() {
    return await buildSchema({
      resolvers: [__dirname + '/Resolvers/*.ts'],
      scalarsMap
    })
  }
}
