var push = require ("web-push");
let vapidkeys = {
  publicKey: 'BBU8pm34zV90s6KGE3bxmev8k5sz-pEji9WMleu2BIT6MgBTomOJRpliHmNSDPOzrOTyPc_BrN_qxYxppMW0EaQ',
  privateKey: 'fIfErvDORVWhCU0F4nUjx2c_z_T_VDHKrsiiSljK15U'
}


push.setVapidDetails('mailto:test@test.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eWQnUzeQdGE:APA91bHfpTZgGA7FiS7JtqiMwl8hcKAlZxjRbbrfEnl4M6abL5xNxBRr7We4nMmKELnDeM15xvkbjw-6eVlHB6_496s9j2oboF_wSbdQzsH2XDI0l3saxU5D2OFkhblkf2HOljDdMeG2","expirationTime":null,"keys":{"p256dh":"BOz_p92AHp6LK7nleIO4Lh5YXzWuL2Wrbi6fREYK14VAEBJ0aO7kw6tY2Chww9MDZMM12Di_PGerNX9XQZho6CI","auth":"ttg-3OUV8JBHFD8rv-TtZA"}}


async function send(){
push.sendNotification(sub, 'Test Message');
}