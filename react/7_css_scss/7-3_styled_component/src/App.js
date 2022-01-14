import StyledButton from "./components/StyledButton";

function App() {
  return (
    <div className="App">
      <StyledButton>버튼</StyledButton>
      <StyledButton primary={true}>버튼</StyledButton>
    </div>
  );
}

export default App;
