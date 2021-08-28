import User from "App/Models/User";
import { Arg, Mutation, Resolver } from "type-graphql";
import { RegisterUserInput } from "../Inputs/RegisterUserInput";

@Resolver(User)
export class CreateUser {
  @Mutation(() => User, { description: 'Register a new User' })
  async registerUser(@Arg('data') userInput: RegisterUserInput): Promise<User> {
    const user = await User.create(userInput)

    return user
  }
}
