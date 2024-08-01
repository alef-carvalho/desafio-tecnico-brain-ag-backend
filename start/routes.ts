import router from '@adonisjs/core/services/router'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

const CultureController = () => import('#controllers/culture_controller')
const FarmController = () => import('#controllers/farm_controller')
const FarmerController = () => import('#controllers/farmers_controller')

router.get('/', async ({ response }) => response.redirect().toPath('/docs'))
router.get('/docs', async () => AutoSwagger.default.ui('/swagger', swagger))
router.get('/swagger', async () => AutoSwagger.default.docs(router.toJSON(), swagger))

router.resource('cultures', CultureController).as('cultures').only(['index'])
router.resource('farmers', FarmerController).as('farmers').except(['create', 'edit'])
router.resource('farmers/:farmerId/farms', FarmController).as('farms').except(['create', 'edit'])
