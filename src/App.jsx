import "./styles/App.css";
import { Form } from "./components/Form";
import { sampleFields, sampleForm, sampleFormList } from "./components/sampleData";
import { FormList } from "./components/FormList";
import { useState } from "react";

function App() {
  return (
    <>
      <Form form={sampleForm} isDeletable={true} />
      <FormList formList={sampleFormList} />
    </>
  );
}

export default App;
