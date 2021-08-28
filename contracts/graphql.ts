import { Schema } from '../app/GraphQL/Schema';

declare module '@ioc:App/GraphQL/Schema' {
  const schema: Schema;
  export default schema;
}
