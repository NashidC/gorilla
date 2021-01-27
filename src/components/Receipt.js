import "./Receipt.css"

const Receipt = ({ person, ...data }) => {
  return (
    <div className="receipt-container">
      <h3>Receipt for: {(person)}</h3>
      <ul>
        <li><span className="receipt-title">Main: </span>{data.order.main}</li>
        <li><span className="receipt-title">Protein: </span>{data.order.protein}</li>
        <li><span className="receipt-title">Rice: </span>{data.order.rice}</li>
        <li><span className="receipt-title">Sauce: </span>{data.order.sauce}</li>
        <li><span className="receipt-title">Drink: </span>{data.order.drink}</li>
        <li><span className="receipt-title">Toppings: </span>{data.order.toppings}</li>
        <li class="cost"><span class="receipt-titles cost">Cost: </span>$<span class="cost-amount"> {data.order.cost}</span></li>

      </ul>
    </div>
  );
}

export default Receipt;
