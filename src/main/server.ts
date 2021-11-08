/* eslint-disable @typescript-eslint/no-floating-promises */

import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    console.log('\x1b[33mServer is starting...')
    const app = (await import('./config/app')).default
    app.listen(env.port, () => {
      console.log('\x1b[32m╔==========================╗')
      console.log('\x1b[32m║ ⚡   Server started   ⚡ ║')
      console.log('\x1b[32m╚==========================╝')
      console.log('\x1b[32mHOST: \x1b[31mhttp://localhost')
      console.log(`\x1b[32mPORT: \x1b[31m${env.port}`)
      console.log(`\x1b[32mMONGO_URL: \x1b[31m${env.mongoUrl}`)
      console.log('\x1b[0m')
    })
  })
  .catch(console.error)
