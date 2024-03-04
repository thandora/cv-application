const fieldsPersonal = [
  { id: crypto.randomUUID(), name: "Full name", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Email", type: "email", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Contact Number", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Address", type: "text", value: "", removable: false },
  {
    id: crypto.randomUUID(),
    name: "Personal site/portfolio",
    type: "text",
    value: "",
    removable: false,
  },
];

const fieldsEducation = [
  { id: crypto.randomUUID(), name: "University Name", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Degree", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Graduation Month", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Graduation Year", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Address", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Highlights", type: "text", value: "", removable: true },
];

const fieldsWork = [
  { id: crypto.randomUUID(), name: "Company Name", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Job Title", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Month start", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Year start", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Month end", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Year end", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Address", type: "text", value: "", removable: false },
  { id: crypto.randomUUID(), name: "Responsibility", type: "text", value: "", removable: true },
];

const templateFormPersonal = { id: crypto.randomUUID(), title: "Personal", fields: fieldsPersonal };

const templateFormEducation = {
  id: crypto.randomUUID(),
  title: "Education",
  fields: fieldsEducation,
};

const templateFormWork = {
  id: crypto.randomUUID(),
  title: "Work Experience",
  fields: fieldsWork,
};

const templateFormListPersonal = {
  id: crypto.randomUUID(),
  title: "Personal",
  forms: [templateFormPersonal],
};

const templateFormListEducation = {
  id: crypto.randomUUID(),
  title: "Education",
  forms: [templateFormEducation],
};

const templateFormListWork = {
  id: crypto.randomUUID(),
  title: "Work Experienceaaaa",
  forms: [templateFormWork],
};

export {
  templateFormListPersonal,
  templateFormListEducation,
  templateFormListWork,
  templateFormEducation,
  templateFormWork,
};
