import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProduct } from '../Redux/AdminReducer/action';


const initialState = {
  name: '',
  image: '',
  brand: '',
  price: '',
  description: '',
  category: '',
  gender: '',
};

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const { name, images, brand, price, description, category, gender } = product;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: name === 'price' ? +value : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProduct(product));
    setProduct(initialState);
  };

  return (
    <div style={{
        margin: '20px',
        padding : '30px'
    }}>
    <DIV>
      <form onSubmit={handleSubmit}>
        <h1>Add Products</h1>
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={name}
          onChange={handleChange}
        />
        <label>Product Image</label>
        <input
          type="text"
          name="image"
          placeholder="Product Image"
          value={images}
          onChange={handleChange}
        />
        <label>Product Brand</label>
        <input
          type="text"
          name="brand"
          placeholder="Product Brand"
          value={brand}
          onChange={handleChange}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        />
        <label>Category</label>
        <select
          name="category"
          value={category}
          onChange={handleChange}
        >
        <option value="">--Selelct Categorey--</option>
          <option value="topware">Top Ware</option>
          <option value="bottomware">Bottom Ware</option>
          <option value="shoes">Shoes</option>
        </select>
        <label>Gender</label>
        <select name="gender" value={gender} onChange={handleChange}>
         <option value="">--Select Gender--</option>
        <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </DIV>
    </div>
  );
};

const DIV = styled.div`
  width: 800px;
  margin: auto;
  border: 1px solid black;
  padding: 10px;
  font-size: larger;

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input,
  select {
    height: 40px;
    border: 1px solid black;
  }

  button {
    margin: auto;
    width: 400px;
    padding: 20px;
    cursor: pointer;
    background-color: teal;
    border-radius: 7px;
  }

  label {
    align-items: left;
  }
`;
