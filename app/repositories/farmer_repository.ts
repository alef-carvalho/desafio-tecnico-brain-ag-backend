import Farmer from '#models/farmer'

export default class FarmerRepository {
  async findAll(columns: string[] = ['*'], order: string = 'name') {
    return Farmer.query().select(columns).orderBy(order, 'asc')
  }

  async findOne(id: number) {
    return Farmer.query().preload('farms').where({ id }).firstOrFail()
  }

  async findOneByCPFCNPJ(cpf_cnpj: string) {
    return Farmer.findBy({ cpf_cnpj })
  }

  async store(payload: Partial<Farmer>): Promise<Farmer> {
    return await Farmer.create({
      name: payload.name,
      city: payload.city,
      state: payload.state,
      cpf_cnpj: payload.cpf_cnpj,
    })
  }

  async update(id: number, payload: Partial<Farmer>): Promise<Farmer> {
    const farmer = await Farmer.findOrFail(id)
    return await farmer.merge(payload).save()
  }

  async delete(id: number) {
    const farmer = await Farmer.query().where({ id }).firstOrFail()
    await farmer.delete()
  }
}
