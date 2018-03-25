const Twilio = require('twilio')

const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_TOKEN

const client = new Twilio(accountSid, authToken)

const user = {
  githubId: 'itaditya',
  phone: '+919911502984'
}

const checkIfEvening = () => {
  const date = new Date()
  const h = date.getHours()
  return (h >= 20)
}

const getYesterdayDate = () => {
  const date = new Date()
  let d = date.getDate() - 1
  let m = date.getMonth() + 1
  let y = date.getFullYear()

  const f = x => x.toString().padStart(2, '0')
  const formattedDate = `${y}-${f(m)}-${f(d)}`
  return formattedDate
}

module.exports = robot => {
  const remindUserToCode = async context => {
    context.log('see if evening')
    const isEvening = checkIfEvening()
    if(!isEvening) return
    context.log('remindUserToCode in evening')
    const yesterdayDate = getYesterdayDate()
    const { data: { total_count: totalCommits } } = await context.github.search.commits({
      q: `author:${user.githubId} author-date:>${yesterdayDate}`
    })
    if (totalCommits > 0) return
    await client.messages.create({
      to: user.phone,
      // to: '+919711208150',
      from: '+19493018982',
      body: "You haven't made any contributions on Github today !! Don't tell me you are out again. Come back to that chair of yours and start coding right now !!!",
    })
    context.log('nothing committed yet')
  }
  // robot.on('issues.labeled', remindUserToCode)
  robot.on('schedule.repository', remindUserToCode)
}
