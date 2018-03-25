module.exports = robot => {
  const welcomeIssueOpener = () => {
    robot.on('issues.opened', async context => {
      const ISSUE_AUTHOR = context.payload.issue.user.login
      context.log('issue is opened')
      const REPO_OWNER = context.repo().owner
      const isOwner = context.payload.issue.author_association === 'OWNER'
      if (isOwner) return
      context.log('issue opener is not the owner')
      const params = context.issue({
        body: `Hi @${ISSUE_AUTHOR}! Thank you so much for taking out the time to open an issue in this repo.
        @${REPO_OWNER} will get back to you ASAP.`
      })
      return context.github.issues.createComment(params)
    })
  }
  welcomeIssueOpener()
}
