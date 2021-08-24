import { NonEmptyArray } from 'type-graphql'
import { UsersResolver } from './UsersResolver'

export const resolvers: NonEmptyArray<Function> = [UsersResolver]
