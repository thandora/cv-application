import "./styles/App.css";
import { Form } from "./components/Form";
import { sampleData } from "./components/sampleData";

function App() {
  return (
    <>
      <div>New project!</div>
      <h1>This is heading 1</h1>
      <a href="#">This is an anchor</a>
      <button>This is a button.</button>
      <Form title="Personal Details" fields={sampleData} isDeletable={true} />
    </>
  );
}

export default App;
