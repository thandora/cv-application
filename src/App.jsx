import "./styles/App.css";
import {
  sampleFormListEducation,
  sampleFormListPersonal,
  sampleFormListWork,
} from "./components/sampleData";
import { FormList } from "./components/FormList";
import { Display } from "./components/Display";
import { useState } from "react";

function App() {
  const [formListPersonal, setListPersonal] = useState(structuredClone(sampleFormListPersonal));
  const [formListEducation, setListEducation] = useState(structuredClone(sampleFormListEducation));
  const [formListWork, setListWork] = useState(structuredClone(sampleFormListWork));
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

  function getNavContent(index) {
    const content = {
      0: (
        <FormList
          hasTitle={false}
          formList={formListPersonal}
          changeHandler={updateHandler(formListPersonal, setListPersonal)}
          formOptions={{ deletable: false, hideable: false }}
        />
      ),

      1: (
        <FormList
          hasTitle={false}
          formList={formListEducation}
          changeHandler={updateHandler(formListEducation, setListEducation)}
          formOptions={{ deletable: false, hideable: true }}
        />
      ),

      2: (
        <FormList
          hasTitle={false}
          formList={formListWork}
          changeHandler={updateHandler(formListWork, setListWork)}
          formOptions={{ deletable: false, hideable: true }}
        />
      ),
    };

    return content[index];
  }

  return (
    <>
      <nav className="navbar">
        <button
          className={activeIndex === 0 ? "nav-button active" : "nav-button"}
          onClick={() => setActiveIndex(0)}
        >
          <span className="material-symbols-outlined">person</span>
        </button>

        <button
          className={activeIndex === 1 ? "nav-button active" : "nav-button"}
          onClick={() => setActiveIndex(1)}
        >
          <span className="material-symbols-outlined">school</span>
        </button>

        <button
          className={activeIndex === 2 ? "nav-button active" : "nav-button"}
          onClick={() => setActiveIndex(2)}
        >
          <span className="material-symbols-outlined">business_center</span>
        </button>
      </nav>

      <div className="nav-content">{getNavContent(activeIndex)}</div>

      <Display
        formLists={{
          personal: formListPersonal,
          education: formListEducation,
          work: formListWork,
        }}
      />
    </>
  );
}

export default App;
