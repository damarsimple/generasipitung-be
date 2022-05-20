import { getConfig } from 'modules/config'
import { sendMail } from './modules/mailer'
async function main() {
  console.log(
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
    }),
  )
}
main()
