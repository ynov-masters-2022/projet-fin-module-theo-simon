import {useRef, useState} from "react";

const Add = () => {

  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  const [productsList, setProductsList] = useState([]);

  const addProduct = () => {
    const newProduct =
      {
        id: '',
        title: titleRef.current.value,
        price: priceRef.current.value,
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
      }


    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: newProduct
    })
      .then(res => res.json())
      .then((value => {
        newProduct.id = value;
        setProductsList([
          ...productsList,
          newProduct
        ]);
      }))
  };

  return (
    <>
      <div>
        <div>
          <label>Titre</label>
          <input ref={titleRef} type="text"/>
        </div>
        <div>
          <label>Prix</label>
          <input ref={priceRef} type="text"/>
        </div>
        <div>
          <label>Description</label>
          <input ref={descriptionRef} type="text"/>
        </div>
        <div>
          <label>Catégorie</label>
          <input ref={categoryRef} type="text"/>
        </div>
        <button onClick={addProduct}>Add product</button>
      </div>
      <div>
        {productsList.map((product) => (
          <span key={product.id}>{product.title}</span>
        ))}
      </div>
    </>
  );
}


export default Add;
