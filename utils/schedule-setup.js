const createScheduler = require('probot-scheduler')

module.exports = robot => {
  const secs = 1000
  const mins = 60 * secs
  const hours = 60 * mins

  const secondScheduler = () => createScheduler(robot, {
    interval: secs
  })

  const minuteScheduler = () => createScheduler(robot, {
    interval: mins
  })

  const hourScheduler = () => createScheduler(robot, {
    interval: hours
  })

  return {
    secondScheduler,
    minuteScheduler,
    hourScheduler
  }
}
