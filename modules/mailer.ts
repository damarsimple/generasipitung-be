import axios from 'axios'
import { getConfig } from './config'

const mailClient = axios.create({
  baseURL: 'https://postal.damaral.my.id',
  headers: {
    'X-Server-API-Key': getConfig('MAIL_API_KEY'),
  },
})

const SEND_MAIL_ROUTE = '/api/v1/send/message'

interface MailBody {
  subject: string
  plain_body?: string
  html_body?: string
  to: string[]
}

export const sendMail = async (data: MailBody) => {
  return await mailClient.post(SEND_MAIL_ROUTE, {
    sender: 'noreply@postal.damaral.my.id',
    from: 'noreply@postal.damaral.my.id',
    ...data,
  })
}
