export const CartTotal = ({ total }) => {
  return (
    <div className="total">
      <p>Total: $ {total.toFixed(2)}</p>
    </div>
  );
};
