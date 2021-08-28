import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export default class User extends BaseModel {
  @column({ isPrimary: true })
  @Field()
  public id: number

  @column()
  @Field()
  public name: string

  @column()
  @Field()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  @Field()
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @Field()
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
