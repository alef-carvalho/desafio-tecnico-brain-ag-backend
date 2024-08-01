import Farmer from '#models/farmer'

export default class FarmRepository {
  async findAll() {
    return Farmer.query().select(['id', 'name']).orderBy('name', 'asc')
  }

  async findOne(id: number) {
    return Farmer.findByOrFail({ id })
  }

  async store(payload: any): Promise<Farmer> {
    return await Farmer.create({
      name: payload.name,
      city: payload.city,
      state: payload.state,
      cpf_cnpj: payload.cpf_cnpj,
    })
  }

  async delete(id: number) {
    await Farmer.query().where({ id }).delete()
  }
}
