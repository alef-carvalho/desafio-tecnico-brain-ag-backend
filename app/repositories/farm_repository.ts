import Farm from '#models/farm'

export default class FarmRepository {
  async findAll(farmer_id: number) {
    return Farm.query()
      .where({ farmer_id })
      .preload('cultures', (builder) => builder.select(['id', 'name']))
      .select(['id', 'name', 'total_area', 'total_agriculture_area', 'total_vegetation_area'])
      .orderBy('name', 'asc')
  }

  async findOne(id: number) {
    return Farm.query().preload('cultures').where({ id }).firstOrFail()
  }

  async store(payload: Partial<Farm>, cultures: number[]): Promise<Farm> {
    const farm = await Farm.create(payload)
    await farm.related('cultures').attach(cultures)
    return farm
  }

  async update(id: number, data: Partial<Farm>, cultures: number[]) {
    const farm = await Farm.findOrFail(id)
    await farm.merge(data).save()
    await farm.related('cultures').sync(cultures)
  }

  async delete(id: number) {
    await Farm.query().where({ id }).delete()
  }
}
