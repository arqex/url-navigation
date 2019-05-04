global.urlstack = require('../dist/urlstack').default
global.routes = require('../tests/routedata')

// try tests in node
require('../tests/test-navigation')
require('../tests/test-location')