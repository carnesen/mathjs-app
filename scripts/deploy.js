#!/usr/bin/env node

const {deploymentFactory, run} = require('@carnesen/aws')

const deployment = deploymentFactory({priority: 8})

run(deployment.create)
