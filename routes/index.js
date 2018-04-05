const express = require('express')

module.exports = robot => {
  const app = robot.route('/')
  app.use(require('express').static('public'))

  require('./webhooks')(robot)
}
