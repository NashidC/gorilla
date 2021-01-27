import './App.css';
import { useState } from "react";
import Receipt from './components/Receipt';
import data from './components/Records';


function App() {
  const [receipts, setReceipts] = useState(data);

  return (
    <div className="receipt-container">
      {receipts.map((foodItems, index) => {
        return <Receipt {...foodItems} key={index} />
      })}
    </div>
  );
}

export default App;
