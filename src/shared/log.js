import { Logger } from '@carnesen/logger'

import pkg from '../../package.json'

export default new Logger(pkg.name)
