require('mock-local-storage')
require('jsdom-global')()
global.expect = require('expect')
const Vue = require('vue')
const ElementUI = require('element-ui')
Vue.use(ElementUI)
