import path from 'path'
import octicons from 'octicons'
import statuses from 'statuses'
import createError from 'http-errors'

import { WebServer } from '@carnesen/web-server'

import { allCalculationsSlice } from '../shared/slices'
import { isValidCalculation } from '../shared/util'

import store from '../shared/store'

const port = Number(process.env.PORT) || 8000

const server = new WebServer({port})

const topDir = path.join(__dirname, '..', '..')
server.serveStatic({ root: path.join(topDir, 'public') })
server.serveStatic({ root: path.join(topDir, 'dist') })

export const iconNames = ['mark-github', 'question']
const router = server.mountRouter()

iconNames.forEach(iconName =>
  router.get(`/${iconName}.svg`, (ctx, next) => {
    ctx.type = 'image/svg+xml'
    ctx.status = statuses('ok')
    ctx.body = octicons[iconName].toSVG({ xmlns: 'http://www.w3.org/2000/svg' })
    next()
  })
)

router.post('/api/calculation', (ctx, next) => {
  const calculation = ctx.request.body
  if (isValidCalculation(calculation)) {
    ctx.status = statuses('no content')
    allCalculationsSlice.unshift(calculation)
    next()
  } else {
    throw new createError.BadRequest(`Bad calculation "${JSON.stringify(calculation)}"`)
  }
})

router.get('/health', ctx => {
  ctx.body = 'OK'
})

server.sockets.on('connection', socket => {
  store.slices.forEach(slice => {
    const action = slice.actionCreators.setValue(slice.value)
    socket.emit('action', action)
  })
})

store.addActionListener(action => server.sockets.emit('action', action))

export default server
