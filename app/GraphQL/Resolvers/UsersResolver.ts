import User from 'App/Models/User';
import { Arg, Mutation, Query, Resolver } from 'type-graphql'

@Resolver(User)
export class UsersResolver {

  @Query(() => [User], { description: 'Return all users' })
  async users() {
    return await User.all()
  }

  @Query(() => User, { description: 'Find a user by ID' })
  async user(@Arg('id') id: number) {
    return await User.find(id)
  }

  @Query(() => User, { description: 'Return user in session or null', nullable: true })
  async currentUser() {
    return null
  }
}
