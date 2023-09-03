import React from 'react';
import { ProductTileWrapper,ProductImageContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ButtonContainer, AddToCartButton, BuyNowButton } from './Product_CSS';

const ProductTile = (p) => {
 
  function HandleSubmit(e){
    e.preventDefault();
    const x=e.target.elements.ProductID.value;
    alert(x);
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
        <form onSubmit={HandleSubmit}>
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
