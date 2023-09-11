import { selector } from "recoil"
import userState from "../atom/user"

export const adminIdState = selector({
    key:"adminIdState",
    get:({get})=>{
        const userData = get(userState);
        return userData.admin_id;
    }
}) 

export const adminNameState = selector({
    key:"adminNameState",
    get:({get})=>{
        const userData = get(userState);

        return userData.username;
    }
})

export const adminPasswordState = selector({
    key:"adminPasswordState",
    get:({get})=>{
        const userData = get(userState);

        return userData.password;
    }
})


