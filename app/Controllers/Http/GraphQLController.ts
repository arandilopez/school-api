import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schema from '@ioc:App/GraphQL/Schema';

export default class GraphQLController {
  async execute(http: HttpContextContract) {
    try {
      return await Schema.execute(http, {});
    } catch (e) {
      console.error(e)
      return http.response.status(500).json({ errors: [{ message: e.message, status: 500 }] })
    }
  }
}
