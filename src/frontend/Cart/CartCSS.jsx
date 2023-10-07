import styled from 'styled-components';

export const CartTileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.div`
  flex: 1;
  max-width: 100px;
  margin-right: 15px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const ProductInfo = styled.div`
  flex: 2;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
  margin: 0;
`;

export const Quantity = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    width: 40px;
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

export const Actions = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const BuyNowButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 3px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #FF0000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
  border-radius: 3px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #FF3333;
  }
`;
