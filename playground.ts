import { sendMail } from './modules/mailer'
import { getConfig } from './modules/config'

async function main() {
  await sendMail({
    to: ['damaralbaribin@gmail.com'],
    subject: 'Verifikasi Email',
    html_body: `Klik link disini untuk memverifikasi email <strong>${
      getConfig('CONFIRM_MAIL_CLAIM') + 123123
    }</strong>`,
  })
}

main()
