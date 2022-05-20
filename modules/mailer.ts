import axios from 'axios'
import { getConfig } from './config'

const mailClient = axios.create({
  baseURL: 'https://mailapi.takmirmasjid.com',
  headers: {
    // 'X-Server-API-Key': getConfig('MAIL_API_KEY'),
  },
})

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

type SENDER_TYPE = string | 'VERIFICATOR' | 'ADMIN' | 'DAMAR'

export const sendMail = async (data: MailBody, type: SENDER_TYPE = 'DAMAR') => {
  const ID_RECORD = {
    VERIFICATOR: '6287ea14b6b0f5e0d9d2a539',
    DAMAR: '6287d4c86ac05148aab59c52',
  }

  const SEND_MAIL_ROUTE = `/users/${ID_RECORD[type]}/submit`

  return await mailClient.post(SEND_MAIL_ROUTE, data)
}
