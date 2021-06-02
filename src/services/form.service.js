import axios from "axios"

export async function getform() {
    const res = await axios.get(`http://localhost:8080/tour`);
    return res.data
}