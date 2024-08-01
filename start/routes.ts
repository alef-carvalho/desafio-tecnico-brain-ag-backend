import router from '@adonisjs/core/services/router'
const CultureController = () => import('#controllers/culture_controller')
const FarmController = () => import('#controllers/farm_controller')
const FarmerController = () => import('#controllers/farmers_controller')

router.get('/', async () => ({ hello: 'world' }))
router.resource('cultures', CultureController).as('cultures').only(['index'])
router.resource('farmers', FarmerController).as('farmers').except(['create', 'edit'])
router.resource('farmers/:farmerId/farms', FarmController).as('farms').except(['create', 'edit'])
