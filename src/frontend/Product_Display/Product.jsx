import React from 'react';
import { ProductTileWrapper,ProductImageContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ButtonContainer, AddToCartButton, BuyNowButton } from './Product_CSS';

const ProductTile = (p) => {
 
  return (<>
    <ProductTileWrapper>
    <ProductImageContainer>
      <ProductImage src={p.img} alt="try" />
      </ProductImageContainer>
      <ProductInfo>
        <ProductTitle>{p.name}</ProductTitle>
        <ProductPrice>₹{p.price}</ProductPrice>
        <ButtonContainer>
          <AddToCartButton >Add to Cart</AddToCartButton>
          <BuyNowButton >Buy Now</BuyNowButton>
        </ButtonContainer>
      </ProductInfo>
    </ProductTileWrapper>
    </>
  );
};



export default ProductTile;
