import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Hello Css Module!!</h1>
      <Button text={'Click me!'}></Button>
    </div>
  );
}

export default App;
