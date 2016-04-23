require('bootstrap/dist/css/bootstrap')

const styles = require('./styles')
const routes = require('./routes')

require('react-dom').render(routes(), document.getElementById('main'))
