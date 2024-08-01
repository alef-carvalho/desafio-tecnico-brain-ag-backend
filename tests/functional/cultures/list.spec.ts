import { test } from '@japa/runner'

test.group('cultures > list', () => {
  test('should list available cultures', async ({ client }) => {
    const response = await client.get('cultures').send()
    response.assertStatus(200)
  })
})
