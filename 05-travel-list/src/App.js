const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Toothpaste", quantity: 1, packed: false },
  { id: 4, description: "Brush", quantity: 2, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((data) => (
          <Item items={data} />
        ))}
      </ul>
    </div>
  );
}

function Item({ items }) {
  return (
    <li className="li">
      <span>
        {items.quantity} {items.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return <footer className="stats"> Footer Item </footer>;
}
