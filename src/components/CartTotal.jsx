export const CartTotal = ({ total }) => {
  return (
    <div className="total">
      <h2>Total: $ {total.toFixed(2)}</h2>
    </div>
  );
};
