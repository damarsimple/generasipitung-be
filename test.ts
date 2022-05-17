import { sendMail } from './modules/mailer';
async function main() {

    console.log(await sendMail({ to: ["damaralbaribin@gmail.com"], "plain_body": "sanity test", subject: "test" }))
}
main()