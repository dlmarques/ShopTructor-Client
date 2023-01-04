import axios from "axios"



export const checkUser = async (userEmail: string) => {
 return await axios.post(`${process.env.REACT_APP_API_URL}auth/checkUser`, {
        email: userEmail
    }).then(res => {
        return res.data
    }).catch(err => {
        return err.response.data
    })
}


