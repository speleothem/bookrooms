import { DataSource } from 'apollo-datasource';

export default class Api extends DataSource {
  context: any;
  store: any;

  constructor({ store }) {
    super();
    // @ts-ignore
    this.store = store;
  }

  initialize(config: any) {
    // @ts-ignore
    this.context = config.context;
  }

  // @ts-ignore
  async findOrCreateUser({ email: emailArg } = {}) {
    const email =
      this.context && this.context.user ? this.context.user.email : emailArg;
    if (!email) return null;

    const users = await this.store.users.findOrCreate({ where: { email } });
    return users && users[0] ? users[0] : null;
  }
}
