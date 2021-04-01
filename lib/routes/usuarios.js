const { index, show } = require('../controllers/usuario_controller');
const { errorAwareRouter } = require('./utils');

const router = errorAwareRouter();

router.get('/', index);
router.get('/:id', show);

module.exports = router;
