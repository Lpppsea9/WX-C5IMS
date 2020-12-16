'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('users');
	//返回数据给客户端
	const res = await collection.where({
		user_name:event.user_name
	}).get();
	console.log(res)
	return event
};
