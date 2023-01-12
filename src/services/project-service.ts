import axios from "axios"

export const registerProject = async (project: {email: string | undefined, name: string}) => {
   return axios.post(`${process.env.REACT_APP_API_URL}auth/registerProject`, {
    email: project.email,
    name: project.name,
 }).then(res => {
  return res.status
 }).catch(err => {
    return err.response.status
 })
}