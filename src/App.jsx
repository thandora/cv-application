import "./styles/App.css";
import { sampleFormListPersonal } from "./components/sampleData";
import { FormList } from "./components/FormList";
import { useState } from "react";

function App() {
  const [formListPersonal, setFormList] = useState(structuredClone(sampleFormListPersonal));
  const [activeIndex, setActiveIndex] = useState(0);

  function updateFormList(formId) {
    return function (fieldId) {
      return function (e) {
        const newFormList = structuredClone(formListPersonal);

        const newForms = newFormList.forms.map((f) => {
          if (f.id === formId) {
            return updateForm(f, fieldId, e);
          }
          return structuredClone(f);
        });

        setFormList({ ...formListPersonal, forms: newForms });
      };
    };
  }

  function updateForm(form, fieldId, e) {
    const newFields = form.fields.map((field) => {
      if (field.id === fieldId) {
        return { ...field, value: e.target.value };
      }
      return { ...field };
    });

    return { ...form, fields: newFields };
  }

  function displayNavContent(index) {
    const content = {
      0: <FormList formList={formListPersonal} changeHandler={updateFormList} />,
    };
    return content[index];
  }

  return (
    <>
      <nav className="navbar">
        <button className="nav-button" onClick={() => setActiveIndex(0)}>
          <span className="material-symbols-outlined">person</span>
        </button>

        <button className="nav-button" onClick={() => setActiveIndex(1)}>
          <span className="material-symbols-outlined">school</span>
        </button>

        <button className="nav-button" onClick={() => setActiveIndex(2)}>
          <span className="material-symbols-outlined">business_center</span>
        </button>
      </nav>
      <div className="nav-content">{displayNavContent(activeIndex)}</div>
    </>
  );
}

export default App;
