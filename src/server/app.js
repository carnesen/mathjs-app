import path from 'path'
import express from 'express'
import morgan from 'morgan'

import log from './log'

const app = express()

const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
app.use(morgan(logFormat, { stream: { write: message => log.info(message) } }))

const topDir = path.join(__dirname, '..', '..')
app.use(express.static(path.join(topDir, 'public')))
app.use(express.static(path.join(topDir, 'dist')))

export default app
