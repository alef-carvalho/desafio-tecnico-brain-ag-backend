import Culture from '#models/culture'

export default class CultureRepository {
  async findAll() {
    return Culture.query()
      .select(['id', 'name'])
      .where({ active: true })
      .orderBy('name', 'asc')
      .exec()
  }
}
