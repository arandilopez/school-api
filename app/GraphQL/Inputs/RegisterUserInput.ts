import User from "App/Models/User";
import { MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType({ description: 'Fields to register a new User' })
export class RegisterUserInput implements Partial<User> {
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  @MinLength(8, { message: "Password should be at least $constraint1 chars long" })
  password: string
}
