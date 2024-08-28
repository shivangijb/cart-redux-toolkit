import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { allItems, addItemInCart } from "../redux/slices/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.cart.items);
  const allItemsInCart = useSelector((store) => store.cart.cartItems);

  const fetchProducts = async () => {
    try {
      const products = await fetch("https://fakestoreapi.com/products");
      return products;
    } catch {
      console.error("Api failed");
    }
  };

  useEffect(() => {
    const productsFromApi = fetchProducts();
    productsFromApi
      .then((res) => res.json())
      .then((res) => dispatch(allItems(res)))
      .catch(() => console.error("Failed to fetch products"));
  }, []);

  const handleInc = (item) => {
    dispatch(addItemInCart(item));
  };

  return (
    <Wrapper>
      <div>
        {allProducts.map((product) => {
          return (
            <ProductContainer key={product.id}>
              <TextContainer>
                <h3>{product.title}</h3>
                <p>Rs. {product.price}</p>
              </TextContainer>
              <ButtonContainer>
                <button>-</button>
                <div>1</div>
                <button onClick={() => handleInc(product)}>+</button>
              </ButtonContainer>
            </ProductContainer>
          );
        })}
      </div>
      <CartContainer>
        <h2>Cart</h2>
        <CartItems>
          {allItemsInCart.map((item) => {
            return <div>{item.title}</div>;
          })}
        </CartItems>
      </CartContainer>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProductContainer = styled.div`
  border: 1px black solid;
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;
`;

const TextContainer = styled.div`
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px black solid;
`;

const CartItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div {
    margin: 5px;
  }
`;
