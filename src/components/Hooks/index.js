import {useState} from "react";

const Hooks = () => {
  const [total, setTotal] = useState(0)

  const addOne = () => {
    setTotal(total + 1);
  }
  const addTwo = () => {
    setTotal(total + 2);
  }

  return (
    <>
      <div>
        <span>Le total est de : {total}</span>
      </div>
      <div>
        <button onClick={addOne}>Ajouter +1</button>
        <button onClick={addTwo}>Ajouter +2</button>
      </div>
    </>
  )
}

export default Hooks;
