'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let user_name = event.user_name
	let password = event.password
	const collection = db.collection('users');
	let res = await collection.add({"user_name":user_name, "password":password});
	//返回数据给客户端
	return {"msg":"ok"}
};
