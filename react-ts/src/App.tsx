import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";
import { ChaiList } from "./components/ChaiList.tsx";
import type { Chai } from "./types.ts";
import { OrderFrom } from "./components/OrderFrom.tsx";
import { Card } from "./components/Card.tsx";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "Lemon", price: 40 },
  { id: 3, name: "Ginger", price: 45 },
];

function App() {
  return (
    <>
      <div>
        <h1>Prabhat</h1>
        <ChaiCard name="Headphones" price={5000} />
        <ChaiCard name="iPhone" price={80000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderFrom
          onSubmit={(order) => {
            console.log("Placed: ", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title = "Chai aur Typescript" footer = {<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
