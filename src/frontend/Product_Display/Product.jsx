import React from 'react';
import { ProductTileWrapper,ProductImageContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ButtonContainer, AddToCartButton, BuyNowButton } from './Product_CSS';
import Axios from '../../Axios';

const ProductTile = (p) => {
  
  async function HandleAddToCart(e){
    e.preventDefault();
    const userName=localStorage.getItem("userName");
    const Password=localStorage.getItem("pswd");
    if(userName && Password){
      const x=e.target.elements.ProductID.value;
      // alert(x);
      await Axios.post("/updateCart",{"productID":x})
      windows.location.reload;
    }
    else{
      alert("login crowww pehle");
    }
  }
  return (<>
    <ProductTileWrapper>
    <ProductImageContainer>
      <ProductImage src={p.img} alt="try" />
      </ProductImageContainer>
      <ProductInfo>
        <ProductTitle>{p.name}</ProductTitle>
        <ProductPrice>₹{p.price}</ProductPrice>
        <ButtonContainer>
        <form onSubmit={HandleAddToCart}>
        <input type="hidden" value={p.id} name="ProductID" />
          <AddToCartButton type='submit'>Add to Cart</AddToCartButton>
          </form>
          <BuyNowButton >Buy Now</BuyNowButton>
        </ButtonContainer>
      </ProductInfo>
    </ProductTileWrapper>
    </>
  );
};



export default ProductTile;
