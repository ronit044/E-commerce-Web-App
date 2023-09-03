import styled from 'styled-components';

export const ProductTileWrapper = styled.div`
  width: 100%;
  max-width: 300px; /* Adjust as needed */
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px; /* Add margin to separate tiles */
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: #fff; /* Background color for the tile */
  display: inline-block;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImageContainer = styled.div`
  max-width: 100%;
  height: 200px; /* Set a fixed height for the image container */
  overflow: hidden; /* Hide any overflow from the image */
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%; /* Ensure the image does not exceed the container's height */
  width: 200%;
 
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  margin-top: 12px;
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  color: #333; /* Text color for the title */
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  margin: 8px 0 0;
  color: #ff5722; /* Text color for the price, you can choose your own color */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50; /* Button background color */
  color: #fff; /* Button text color */
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #45a049; /* Hover color */
  }
`;

export const BuyNowButton = styled.button`
  background-color: #2196f3; /* Button background color */
  color: #fff; /* Button text color */
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1976d2; /* Hover color */
  }
`;
