import { useSearchParams } from "react-router-dom"

export default function SearchExample() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
  const number = searchParams.get("n")

  return (
    <>
      <h1>{number}</h1>
      <input
        type="number"
        className="bg-blue-50 border border-blue-300 text-black-900"
        value={number}
        onChange={e => setSearchParams({ n: e.target.value })}
      />
    </>
  )
}