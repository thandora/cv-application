const sampleFields = [
  { id: 0, name: "First field", type: "text", value: "" },
  { id: 1, name: "Another field", type: "text", value: "" },
  { id: 2, name: "Age", type: "number", value: 33 },
];

const sampleForm = { id: 0, title: "Personal Details", fields: sampleFields };

const sampleFormList = { title: "Personal Details", forms: [sampleFields, sampleFields] };
export { sampleFields, sampleForm, sampleFormList };
