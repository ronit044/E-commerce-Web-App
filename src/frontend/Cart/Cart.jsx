import React, { useState } from 'react';
import {
  CartTileContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Quantity,
  Actions,
  BuyNowButton,
  DeleteButton,
} from './CartCSS';

function CartTile(p) {
  const [quant,updateQuant]=useState(0);
  function handleQuant(e){
    e.preventDefault();
    const x=e.target.value;
    updateQuant(x);
  }

  return (
    <CartTileContainer>
      <ProductImage>
        <img src={p.img} alt={p.name} />
      </ProductImage>
      <ProductInfo>
        <ProductName>{p.name}</ProductName>
        <ProductPrice>${p.price}</ProductPrice>
      </ProductInfo>
      <Quantity >
        <label htmlFor="quantity">Quantity:</label>
        <input onChange={handleQuant} type="number" name="quantity"  min="1" value={quant} />
      </Quantity>
      <Actions>
        {/* <BuyNowButton>Buy No/sw</BuyNowButton> */}
        <DeleteButton>Delete</DeleteButton>
      </Actions>
    </CartTileContainer>
  );
}

export default CartTile;
