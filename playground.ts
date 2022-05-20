import { sendMail } from './modules/mailer'
import { getConfig } from './modules/config'

async function main() {
  await sendMail({
    to: [
      { name: 'Damar Albaribin Syamsu', address: 'damaralbaribin@gmail.com' },
    ],
    subject: 'Verifikasi Email',
    html: `Klik link disini untuk memverifikasi email <strong>${
      getConfig('CONFIRM_MAIL_CLAIM') + 123123
    }</strong>`,
    text: `Klik link disini untuk memverifikasi email <strong>${
      getConfig('CONFIRM_MAIL_CLAIM') + 123123
    }</strong>`,
  })
}

main()
