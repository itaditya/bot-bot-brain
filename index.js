module.exports = robot => {
  robot.log('Started')
  robot.on('issues.opened', async context => {
    context.log('issue is opened')
    const AUTHOR = context.repo().owner;
    const params = context.issue({
      body: `Hey There! Thank you so much for taking out the time to open an issue in this repo.
      @${AUTHOR} will get back to you ASAP.`
    })
    return context.github.issues.createComment(params)
  })
}
