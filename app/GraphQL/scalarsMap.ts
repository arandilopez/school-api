import { GraphQLScalarType, Kind } from "graphql";
import { DateTime } from "luxon";
import { ScalarsTypeMap } from "type-graphql/dist/schema/build-context";

const DateTimeLuxonScalar = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Luxon DateTime Scalar',
  parseValue(value: string) {
    return DateTime.fromISO(value)
  },
  serialize(value: DateTime) {
    return value.toISO()
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return DateTime.fromISO(ast.kind)
    }
    return null;
  },
});

export const scalarsMap: ScalarsTypeMap[] = [
  { type: DateTime, scalar: DateTimeLuxonScalar }
]
