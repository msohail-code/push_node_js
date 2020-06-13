var push = require ("web-push");
let vapidkeys = {
  publicKey: 'BBU8pm34zV90s6KGE3bxmev8k5sz-pEji9WMleu2BIT6MgBTomOJRpliHmNSDPOzrOTyPc_BrN_qxYxppMW0EaQ',
  privateKey: 'fIfErvDORVWhCU0F4nUjx2c_z_T_VDHKrsiiSljK15U'
}


push.setVapidDetails('mailto:test@test.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub =

async function send(){
push.sendNotification(sub, 'Test Message');
}