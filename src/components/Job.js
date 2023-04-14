import { useParams } from "react-router-dom"

export default function Job() {
  const { id } = useParams()

  return (
    <h1>Job {id}</h1>
  )
}