import { useState, useEffect } from "react";

function Motorbike2() {
  const [brand, setBrand] = useState("Honda");
  const [model, setModel] = useState("Vario");
  const [year, setYear] = useState("2022");
  const [color, setColor] = useState("red");

  const [owner, setOwner] = useState({
    name: "James Bond",
    nik: "123456789",
    address: "Jl. Tukad Batanhari 55"
  });

  

  const updateAddress = () => {
    setOwner(previousState => {
      return { ...previousState, address: "Jl Sunset Road" }
    });
  }

  return (
    <>
      <h1>My Motorbike is {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
      <hr/>
      <h1>Owner {brand}</h1>
      <p>Name : {owner.name}</p>
      <p>Nik : {owner.nik}</p>
      <p>Address : {owner.address}</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
        type="button"
        onClick={updateAddress}
      >Change Address</button>
    </>
  )
}

export default Motorbike2;