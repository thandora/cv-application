const fieldsPersonal = [
  {
    id: crypto.randomUUID(),
    name: "Full name",
    type: "text",
    value: "John A. Doe",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Email",
    type: "email",
    value: "jdoe@email.email",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Contact Number",
    type: "text",
    value: "(109)87654321",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Address",
    type: "text",
    value: "Some Street, City, State",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Personal site/portfolio",
    type: "text",
    value: "https://jdoe.com/",
    removable: false,
  },
];

const fieldsEducation = [
  {
    id: crypto.randomUUID(),
    name: "University Name",
    type: "text",
    value: "Some University",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Degree",
    type: "text",
    value: "Computer Science",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Graduation Month",
    type: "text",
    value: "March",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Graduation Year",
    type: "text",
    value: "2024",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Address",
    type: "text",
    value: "Some City, State",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Highlight",
    type: "text",
    value: "Magna Cum Laude",
    removable: true,
  },
];

const fieldsWork = [
  {
    id: crypto.randomUUID(),
    name: "Company Name",
    type: "text",
    value: "Krusty Krab",
    removable: false,
  },
  { id: crypto.randomUUID(), name: "Job Title", type: "text", value: "Fry Cook", removable: false },
  { id: crypto.randomUUID(), name: "Month start", type: "text", value: "May", removable: false },
  { id: crypto.randomUUID(), name: "Year start", type: "text", value: "1999", removable: false },
  { id: crypto.randomUUID(), name: "Month end", type: "text", value: "March", removable: false },
  { id: crypto.randomUUID(), name: "Year end", type: "text", value: "2024", removable: false },
  {
    id: crypto.randomUUID(),
    name: "Address",
    type: "text",
    value: "Some City, State",
    removable: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Responsibility",
    type: "text",
    value: "Cooked",
    removable: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Responsibility",
    type: "text",
    value: "Served stuff",
    removable: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Responsibility",
    type: "text",
    value: "Cashiered stuff",
    removable: true,
  },
];

const sampleFormPersonal = { id: crypto.randomUUID(), title: "Personal", fields: fieldsPersonal };

const sampleFormEducation = {
  id: crypto.randomUUID(),
  title: "Education",
  fields: fieldsEducation,
};

const sampleFormWork = {
  id: crypto.randomUUID(),
  title: "Work Experience",
  fields: fieldsWork,
};

const sampleFormListPersonal = {
  id: crypto.randomUUID(),
  title: "Personal",
  forms: [sampleFormPersonal],
};

const sampleFormListEducation = {
  id: crypto.randomUUID(),
  title: "Education",
  forms: [sampleFormEducation],
};

const sampleFormListWork = {
  id: crypto.randomUUID(),
  title: "Work Experienceaaaa",
  forms: [sampleFormWork],
};

export { sampleFormListPersonal, sampleFormListEducation, sampleFormListWork };
