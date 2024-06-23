import { Account } from "../../types/Accounts"
import { LOGIN } from "../type"

export const setLoginReducer = (payload) => ({
  type: LOGIN,
  payload
})

export const login = ({ username, password }: Account) => {
  return dispatch => {
     setTimeout(() => {
      dispatch(setLoginReducer({ token: "1234" ,user:{username,password}}))
    }, 2000);

  }
}