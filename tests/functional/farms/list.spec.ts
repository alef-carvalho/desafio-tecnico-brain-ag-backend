import { test } from '@japa/runner'
import { cnpj } from 'cpf-cnpj-validator'
import Farmer from '#models/farmer'

test.group('farms > list', () => {
  //
  test('should create farm successfully', async ({ client }) => {
    const farmer = await Farmer.create({
      cpf_cnpj: cnpj.generate(),
      name: 'Alef Carvalho',
      city: 'Porto Velho',
      state: 'RO',
    })

    let farm = {
      farmer_id: farmer.id,
      name: 'Fazenda Teste',
      total_area: 1000,
      total_agriculture_area: 500,
      total_vegetation_area: 500,
      cultures: [1, 2, 3],
    }

    const response = await client.post(`farmers/${farmer.id}/farms`).json(farm)

    response.assertStatus(200)
  })

  test('should list farms successfully', async ({ client }) => {
    const farmer = await Farmer.create({
      cpf_cnpj: cnpj.generate(),
      name: 'Alef Carvalho',
      city: 'Porto Velho',
      state: 'RO',
    })

    const farm = await farmer.related('farms').create({
      name: 'Fazenda Teste',
      total_area: 1000,
      total_agriculture_area: 500,
      total_vegetation_area: 500,
    })

    const response = await client.get(`farmers/${farmer.id}/farms`)

    response.assertStatus(200)
  })
})
