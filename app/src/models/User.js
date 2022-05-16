"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id)
        if(id) {
            if(id === this.body.id && psword === this.body.psword) {
                return { success:true};
            }
            return { success:false, msg:"비번틀림"};
        }
        return { success:false, msg:"아이디없음."};
    }
}

module.exports = User;