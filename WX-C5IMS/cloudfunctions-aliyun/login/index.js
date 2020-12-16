'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const collection = db.collection('users');
	let status = 0;
	const res = await collection.where({
		user_name:event.user_name
	}).get();
	// console.log(res)
	let user = res.data;
		if(user.length==0){
			status=1;
		}
		// console.log(user[0].password)
		if(user[0].password!==event.password){
			status=2;
		}
	//返回数据给客户端
	return {"status":status}
};
