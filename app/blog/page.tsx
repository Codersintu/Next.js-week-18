import axios from "axios"

async function getData() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
  return res.data
}

export default async function page() {
    const blogs=await getData()
  return (
    <div>{blogs.map((blog:any, i:any) => (
        <div key={i}>{blog.title}</div>
    ))}</div>
  )
}