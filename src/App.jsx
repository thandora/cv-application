import "./styles/App.css";
import { Form } from "./components/Form";
import { sampleFields, sampleForm, sampleFormList } from "./components/sampleData";
import { FormList } from "./components/FormList";

function App() {
  return (
    <>
      <div>New project!</div>
      <h1>This is heading 1</h1>
      <a href="#">This is an anchor</a>
      <button>This is a button.</button>
      <Form form={sampleForm} isDeletable={false} />
      <FormList formList={sampleFormList} />
    </>
  );
}

export default App;
