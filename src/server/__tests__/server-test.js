import request from 'supertest-as-promised'
import { calculate } from '../../shared/util'
import server, { iconNames } from '../server'

describe('server', function () {
  it('GET / serves index.html', function () {
    return request(server.httpServer).get('/')
      .expect(200)
      .then(res => res.headers[ 'content-type' ].should.match(/^text\/html/))
  })

  it('GET /bundle.js', function () {
    return request(server.httpServer).get('/bundle.js').expect(200)
  })

  iconNames.forEach(iconName => it(`GET ${iconName}.svg`, function () {
    return request(server.httpServer).get(`/${iconName}.svg`).expect(200)
  }))

  it('GET /health responds 200', function () {
    return request(server.httpServer).get('/health').expect(200)
  })

  it('POST /api/calculation responds 400 if no expression', function () {
    return request(server.httpServer).post('/api/calculation').expect(400)
  })

  it('POST /api/calculation returns 204 (no content) if valid calculation', function () {
    const calculation = calculate('4+4')
    return request(server.httpServer).post('/api/calculation').send(calculation).expect(204)
  })
})
