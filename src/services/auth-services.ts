import axios from "axios"

export const registerUser = async (user: {name: string | undefined, email: string | undefined, picture: string | undefined, email_verified: boolean | undefined, locale: string | undefined}) => {
   return axios.post(`${process.env.REACT_APP_API_URL}auth/registerUser`, {
    user: user
 }).then(res => {
  return res.status
 }).catch(err => {
    return err.response.status
 })
}