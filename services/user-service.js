const UserModel = require('../models/user-models.js'); // or .ts, .json, etc.




class UserService{
async findUser(filter){
    const user= await UserModel.findOne(filter);
    return user;

}
async createUser(data)
{
    const user=await userModels.findOne(data);
    return user;
}
}

module.exports = new UserService();