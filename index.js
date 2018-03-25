module.exports = robot => {
  robot.log('Started')

  const { hourScheduler } = require('./utils/schedule-setup')(robot)
  // hourScheduler()
  require('./routes')(robot)
  require('./utils/github-replier')(robot)
  require('./utils/reminder')(robot)
}
