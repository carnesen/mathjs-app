import request from 'supertest-as-promised'

import app from '../app'

describe('app', function () {
  it('serves index.html', function () {
    return request(app).get('/').expect(200)
  })
  it('serves bundle.js', function () {
    return request(app).get('/bundle.js').expect(200)
  })
  it('404 on anything else', function () {
    return request(app).get('/foo').expect(404)
  })
})
