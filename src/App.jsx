import { useEffect, useState } from 'react'
import './App.css'
import Product from './Components/products';

function App() {
  const [products, setProducts] = useState([]);

  const [fromState, setFromState] =useState({});

  const loadData = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=5')
    const data =await response.json();
    setProducts(data);
  };

  const handleChange =(e) => {
    setFromState({
      ...fromState,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    loadData();
  },[]
);
  const handleSumbit = (e) => {
    e.preventDefault();
    alert ("from sumbit");
    if (fromState.id) {
      updateProduct();
    } else {
    CreatProduct();
      }
      setFromState({});
  }

  const CreatProduct =() =>{
    const temProd = {...fromState};
    temProd.id = Date.now();
    setProducts([...products,temProd])
  };

  const updateProduct = () => {
    const index = products.findIndex(Product => Product.id === fromState.id);

    const temProds = [...products];
    temProds[index] = fromState;
    setProducts(temProds);
  }

  const deleteProduct = (prodId) => {
    setProducts (products.filter(({ id }) => prodId !== id));
  };

  const editproduct = (pdId) => {
    const pdData = products.find((Product) => Product.id === pdId);
    setFromState(pdData);
  }

  return (
    <>
      <form className='from' onSubmit={handleSumbit}> 
        <input type="text" name='title' placeholder='Enter the title' onChange={handleChange} value={fromState.title || ""}/>
        <br/>
        <br/>
        <textarea type="text" name='description' placeholder='Enter the description' onChange={handleChange} value={fromState.description || ""}/>
        <br/> 
        <br/>
        <input type="number" name='price' placeholder='Enter the price' onChange={handleChange} value={fromState.price || ""}/>
        <br/>
        <br/>
        <input type="url" name='image' placeholder='Enter the image url'onChange={handleChange} value={fromState.image || ""} />
        <br/>
        <br/>
        
        <button type='sumbit'>Sumbit</button>
      </form>
     {products.map((products) => (
      <Product {...products} key={Product.id} deleteProduct={deleteProduct} editproduct={editproduct}/>
     ))}
    </>
  );
}

export default App
