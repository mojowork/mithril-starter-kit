import { Routes, DefaultRoute } from './routes'

/* Import global app styles here */
import './index.less'

/* Wire up mithril app to DOM */
const $root = document.body.querySelector('#app')
m.route($root, DefaultRoute, Routes)