module.exports = robot => {
  const app = robot.route('/app/webhooks')
  app
  .get('/', (req, res) => {
    res.send('Hello Webhooks')
  })
  .get('/cron', (req, res) => {
    res.send('Cron hook here')
  })
  .get('/cron/hourly', (req, res) => {
    res.sendStatus(200)
    // remindUserToCode();
  })
}
