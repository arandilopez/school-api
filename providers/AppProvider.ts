import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { Schema } from '../app/GraphQL/Schema';

export default class AppProvider {
  constructor(protected app: ApplicationContract) { }

  public register() {
    this.app.container.bind('App/GraphQL/Schema', () => {
      return new Schema();
    })
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
