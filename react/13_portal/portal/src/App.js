import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true)
  }

  const close = () => {
    setVisible(false)
  }
  return (
    <div className="App">
      <button onClick={open}>open</button>

      {/* open버튼 클릭 시, visible 상태가 true로 바뀌면서 Modal 컴포넌트가 화면에 띄워질 것이다. */}
      {visible && <Modal>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, .5)',
          }}
          onClick={close}>Hello!</div></Modal>}
    </div>
  );
}

export default App;
