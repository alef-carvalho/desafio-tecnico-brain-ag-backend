import { test } from '@japa/runner'
import { cpf } from 'cpf-cnpj-validator'
import Farmer from '#models/farmer'

test.group('farmers > store', () => {
  test('should be fail if farmer CPF/CNPJ is invalid', async ({ client }) => {
    const response = await client.post('farmers').json({
      cpf_cnpj: '00000000000',
      name: 'Alef Carvalho',
      city: 'Porto Velho',
      state: 'RO',
    })
    response.assertStatus(422)
    response.assertBodyContains({ message: 'CPF/CNPJ inválido' })
  })

  test('should be fail if farmer is already registered', async ({ client }) => {
    const farmer: Partial<Farmer> = {
      name: 'Alef Carvalho',
      city: 'Porto Velho',
      state: 'RO',
      cpf_cnpj: '00178695017',
    }

    const createResponse = await client.post('farmers').json(farmer)
    const conflictResponse = await client.post('farmers').json(farmer)

    createResponse.assertStatus(200)
    conflictResponse.assertStatus(409)
    conflictResponse.assertBodyContains({ message: 'Fazendeiro já registrado' })
  })

  test('should be create farmer successfully', async ({ client }) => {
    const farmer = {
      cpf_cnpj: cpf.generate(),
      name: 'Alef Carvalho',
      city: 'Porto Velho',
      state: 'RO',
    }
    const response = await client.post('farmers').json(farmer)
    response.assertStatus(200)
    response.assertBodyContains(farmer)
  })
})
