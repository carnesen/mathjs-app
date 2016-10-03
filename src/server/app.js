import path from 'path'

import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import log from './log'
import calculations from '../shared/calculations'
import { isValidCalculation } from '../shared/util'

const app = express()

const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
app.use(morgan(logFormat, { stream: { write: message => log.info(message) } }))
app.use(bodyParser.json())

const topDir = path.join(__dirname, '..', '..')
app.use(express.static(path.join(topDir, 'public')))
app.use(express.static(path.join(topDir, 'dist')))

app.post('/api/calculation', (req, res) => {
  const calculation = req.body
  if (isValidCalculation(calculation)) {
    res.status(204).send() // no content
    calculations.unshift(calculation)
  } else {
    res.status(400).send({ error: `Bad calculation "${calculation}"` })
  }
})

export default app
