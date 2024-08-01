import router from '@adonisjs/core/services/router'
const CulturesController = () => import('#controllers/cultures_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/cultures', [CulturesController, 'index']).as('cultures.index')
