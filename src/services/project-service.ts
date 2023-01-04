import axios from "axios"

export const registerProject = async (project: {email: string | undefined, name: string, country: string }) => {
   return axios.post(`${process.env.REACT_APP_API_URL}auth/registerProject`, {
    email: project.email,
    name: project.name,
    country: project.country
 }).then(res => {
  return res.status
 }).catch(err => {
    return err.response.status
 })
}