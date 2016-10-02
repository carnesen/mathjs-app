import path from 'path'

import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

import log from './log'
import calculate from '../shared/calculate'
import calculations from '../shared/calculations'

const app = express()

const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
app.use(morgan(logFormat, { stream: { write: message => log.info(message) } }))
app.use(bodyParser.json());

const topDir = path.join(__dirname, '..', '..')
app.use(express.static(path.join(topDir, 'public')))
app.use(express.static(path.join(topDir, 'dist')))

app.post('/api/calculation', (req, res) => {
  const expression = req.body.expression
  if (!expression) {
    res.status(400).send({ error: 'Bad request: empty expression' })
  } else {
    const result = calculate(expression)
    calculations.unshift(result)
    res.status(204).send() // no content
  }
})

export default app
