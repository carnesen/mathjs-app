import { createLogger } from '@carnesen/util'

import { name } from '../../package.json'

const options = { console: true }
if (process.env.NODE_ENV === 'test') {
  options.level = 'none'
}

export default createLogger(name, options)
