import axios from 'axios'
import { getConfig } from './config'

const mailClient = axios.create({
  baseURL: 'https://mailapi.takmirmasjid.com',
  headers: {
    // 'X-Server-API-Key': getConfig('MAIL_API_KEY'),
  },
})

const SEND_MAIL_ROUTE = '/users/6287d4c86ac05148aab59c52/submit'

interface Target {
  name: string
  address: string
}

interface MailBody {
  subject: string
  text: string
  html: string
  to: Target[]
}

export const sendMail = async (data: MailBody) => {
  return await mailClient.post(SEND_MAIL_ROUTE, {
    sender: 'noreply@postal.damaral.my.id',
    from: 'noreply@postal.damaral.my.id',
    ...data,
  })
}
