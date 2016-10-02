import request from 'supertest-as-promised'

import calculations from '../../shared/calculations'
import app from '../app'

describe('app', function () {
  it('GET / serves index.html', function () {
    return request(app).get('/')
      .expect(200)
      .then(res => res.headers[ 'content-type' ].should.match(/^text\/html/))
  })

  it('GET /bundle.js', function () {
    return request(app).get('/bundle.js').expect(200)
  })

  it('POST /api/calculation responds 400 if no expression', function () {
    return request(app).post('/api/calculation').expect(400)
  })

  it('POST /api/calculation returns 204 (no content) if expression', function () {
    const expression = '4+4'
    return request(app).post('/api/calculation').send({ expression })
      .expect(204)
      .then(() => {
        const calculation = calculations.value[0]
        calculation.expression.should.equal(expression)
      })
  })

  it('404 on anything else', function () {
    return request(app).get('/foo').expect(404)
  })
})
