const fieldsPersonal = [
  { id: crypto.randomUUID(), name: "Full name", type: "text", value: "John A. Doe" },
  { id: crypto.randomUUID(), name: "Email", type: "email", value: "jdoe@email.email" },
  { id: crypto.randomUUID(), name: "Contact Number", type: "text", value: "10987654321" },
  { id: crypto.randomUUID(), name: "Address", type: "text", value: "Some Street, City, State" },
  { id: crypto.randomUUID(), name: "Personal portfolio", type: "text", value: "jdoe.com" },
];

const fieldsEducation = [
  { id: crypto.randomUUID(), name: "University Name", type: "text", value: "Some University" },
  { id: crypto.randomUUID(), name: "Degree", type: "text", value: "Computer Science" },
  { id: crypto.randomUUID(), name: "Graduation Month", type: "text", value: "March" },
  { id: crypto.randomUUID(), name: "Graduation Year", type: "text", value: "2024" },
  { id: crypto.randomUUID(), name: "Address", type: "text", value: "Some City, State" },
  { id: crypto.randomUUID(), name: "Highlights", type: "text", value: "jdoe.com" },
];

const fieldsWork = [
  { id: crypto.randomUUID(), name: "Company Name", type: "text", value: "Krusty Krab" },
  { id: crypto.randomUUID(), name: "Job Title", type: "text", value: "Fry Cook" },
  { id: crypto.randomUUID(), name: "Month start", type: "text", value: "May" },
  { id: crypto.randomUUID(), name: "Year start", type: "text", value: "1999" },
  { id: crypto.randomUUID(), name: "Month end", type: "text", value: "March" },
  { id: crypto.randomUUID(), name: "Year end", type: "text", value: "2024" },
  { id: crypto.randomUUID(), name: "Address", type: "text", value: "Some City, State" },
  { id: crypto.randomUUID(), name: "Responsibility", type: "text", value: "jdoe.com" },
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
