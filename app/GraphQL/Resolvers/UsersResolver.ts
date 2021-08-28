import User from 'App/Models/User';
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver(User)
export class UsersResolver {

  @Query(_returns => [User])
  async users() {
    return await User.all()
  }

  @Query(_returns => User)
  async user(@Arg('id') id: number) {
    return await User.find(id)
  }

}
