import { test } from '@japa/runner'

test.group('farmers > delete', () => {
  test('should be fail if farmer is not registered', async ({ client }) => {
    const response = await client.delete(`farmers/100`)
    response.assertStatus(404)
  })

  test('should be delete farmer successfully', async ({ client }) => {
    const response = await client.delete('farmers/1')
    response.assertStatus(200)
  })
})
