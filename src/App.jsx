import "./styles/App.css";
import { sampleFormListPersonal } from "./components/sampleData";
import { FormList } from "./components/FormList";
import { useState } from "react";

function App() {
  const [formListPersonal, setFormList] = useState(structuredClone(sampleFormListPersonal));

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

  return (
    <>
      <FormList formList={formListPersonal} changeHandler={updateFormList} />
    </>
  );
}

export default App;
