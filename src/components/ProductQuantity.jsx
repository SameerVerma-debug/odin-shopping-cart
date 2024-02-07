export const ProductQuantity = ({productQuantity,setProductQuantity}) => {
  const setQuantity = (e) => {
    e.target.value == "-"
      ? setProductQuantity(Math.max(1, productQuantity - 1))
      : setProductQuantity(productQuantity + 1);
  };
  
  return (
    <div className="set-product-quantity">
      <button onClick={setQuantity} className="set-quantity-button" value="-">
        -
      </button>
      <p className="product-quantity">{productQuantity}</p>
      <button onClick={setQuantity} className="set-quantity-button" value="+">
        +
      </button>
    </div>
  );
};
