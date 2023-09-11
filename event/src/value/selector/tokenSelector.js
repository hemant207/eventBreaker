import { selector } from "recoil";
import token_data from "../atom/token";

const tokenState = selector({
    key:"tokenState",
    get:({get})=>{
        const data = get(token_data)
        return data
    }
})

export default tokenState;