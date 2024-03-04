import "./styles/App.css";
import { sampleFormListEducation, sampleFormListPersonal } from "./components/sampleData";
import { FormList } from "./components/FormList";
import { useState } from "react";

function App() {
  const [formListPersonal, setListPersonal] = useState(structuredClone(sampleFormListPersonal));
  const [formListEducation, setListEducation] = useState(structuredClone(sampleFormListEducation));
  const [activeIndex, setActiveIndex] = useState(0);

  function updateHandler(formList, setter) {
    return function (formId) {
      return function (fieldId) {
        return function (e) {
          const newFormList = structuredClone(formList);

          const newForms = newFormList.forms.map((f) => {
            if (f.id === formId) {
              return updateForm(f, fieldId, e);
            }
            return structuredClone(f);
          });

          setter({ ...formList, forms: newForms });
        };
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
      0: (
        <FormList
          formList={formListPersonal}
          changeHandler={updateHandler(formListPersonal, setListPersonal)}
          formOptions={{ deletable: false, hideable: false }}
        />
      ),
      1: (
        <FormList
          formList={formListEducation}
          changeHandler={updateHandler(formListEducation, setListEducation)}
          formOptions={{ deletable: false, hideable: true }}
        />
      ),
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
