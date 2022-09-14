import "./App.css";
import Wilders from "./components/Wilders";
import wildersData from "./data";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wildersData &&
            wildersData.map((item, index) => (
              <h3 key={index}>
                <Wilders name={item.name} city={item.city} skills={item.skills}/>
              </h3>
            ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
