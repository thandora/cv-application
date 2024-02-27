const sampleFields = [
  { id: 0, name: "First field", type: "text", value: "" },
  { id: 1, name: "Another field", type: "text", value: "" },
  { id: 2, name: "Age", type: "number", value: 33 },
];

const sampleFields1 = [
  { id: 0, name: "Title", type: "text", value: "" },
  { id: 1, name: "Location", type: "text", value: "" },
  { id: 2, name: "years", type: "number", value: 33 },
];

const sampleFields2 = [
  { id: 0, name: "Title", type: "text", value: "" },
  { id: 1, name: "Location", type: "text", value: "" },
  { id: 2, name: "years", type: "number", value: 33 },
];

const sampleForm = { id: 0, title: "MoonBucks", fields: sampleFields1 };
const sampleForm1 = { id: 1, title: "DcMonalds", fields: sampleFields2 };

const sampleFormList = { title: "Personal Details", forms: [sampleForm, sampleForm1] };
export { sampleFields, sampleForm, sampleFormList };
