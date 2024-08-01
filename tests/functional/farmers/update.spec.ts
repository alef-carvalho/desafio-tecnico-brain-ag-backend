import { test } from '@japa/runner'
import Farmer from '#models/farmer'
import { cpf } from 'cpf-cnpj-validator'

test.group('farmers > update', () => {
  test('should be fail if farmer is not registered', async ({ client }) => {
    const response = await client.put(`farmers/100`).json({
      name: 'Alef Carvalho',
      city: 'Porto Velho',
      state: 'RO',
    })
    response.assertStatus(404)
  })

  test('should be update farmer successfully', async ({ client }) => {
    const payload: Partial<Farmer> = {
      name: 'Alef Carvalho EDT',
      city: 'Porto Velho',
      state: 'RO',
      cpf_cnpj: cpf.generate(),
    }

    const createResponse = await client.post('farmers').json(payload)
    const updateResponse = await client.put(`farmers/${createResponse.body().id}`).json(payload)

    createResponse.assertStatus(200)
    updateResponse.assertStatus(200)
  })
})
