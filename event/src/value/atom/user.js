import { atom } from "recoil";

const userState = atom({
    key:"userState",
    default:{
        "admin_id":"",
    }
})

export default userState;