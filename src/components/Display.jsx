import { Fragment } from "react";
import "../styles/Display.css";
import PropTypes from "prop-types";

function Display({ formLists }) {
  const { personal, education, work } = formLists;

  // Personal fields]
  function getPersonalSection() {
    const pFullName = personal.forms[0].fields.find((f) => f.name === "Full name").value;
    const pEmail = personal.forms[0].fields.find((f) => f.name === "Email").value;
    const pContact = personal.forms[0].fields.find((f) => f.name === "Contact Number").value;
    const pAddress = personal.forms[0].fields.find((f) => f.name === "Address").value;
    const pSite = personal.forms[0].fields.find((f) => f.name === "Personal site/portfolio").value;

    return (
      <div className="section-personal">
        <h1>{pFullName} </h1>
        <div className="personal-last-row">
          {pEmail} ❖︎ {pContact} ❖︎ {pAddress} ❖︎ <a href={pSite}>{pSite}</a>
        </div>
      </div>
    );
  }

  // Work
  function getWorkSection() {
    return (
      <div className="section-work">
        <h2>WORK EXPERIENCE</h2>
        {work.forms.map(getFieldsDom)}
      </div>
    );

    function getFieldsDom(form) {
      const wCompany = form.fields.find((f) => f.name === "Company Name").value;
      const wTitle = form.fields.find((f) => f.name === "Job Title").value;
      const wMonthStart = form.fields.find((f) => f.name === "Month start").value;
      const wYearStart = form.fields.find((f) => f.name === "Year start").value;
      const wMonthEnd = form.fields.find((f) => f.name === "Month end").value;
      const wYearEnd = form.fields.find((f) => f.name === "Year end").value;
      const wAddress = form.fields.find((f) => f.name === "Address").value;
      const wResponsibilities = form.fields.filter((f) => f.name === "Responsibility");

      return (
        <Fragment key={crypto.randomUUID()}>
          <div className="first-row">
            <h2>{wCompany}</h2>
            <p>
              {wMonthStart} {wYearStart} - {wMonthEnd} {wYearEnd}
            </p>
          </div>

          <div className="second-row">
            <em>{wTitle}</em>
            <em>{wAddress}</em>
          </div>

          <ul>
            {wResponsibilities.map((r) => {
              return <li key={crypto.randomUUID()}>{r.value}</li>;
            })}
          </ul>
        </Fragment>
      );
    }
  }

  function getEducationSection() {
    return (
      <div className="section-education">
        <h2>EDUCATION</h2>
        {education.forms.map(getFieldsDom)}
      </div>
    );

    function getFieldsDom(form) {
      const eUniversity = form.fields.find((f) => f.name === "University Name").value;
      const eDegree = form.fields.find((f) => f.name === "Degree").value;
      const eMonthEnd = form.fields.find((f) => f.name === "Graduation Month").value;
      const eYeartEnd = form.fields.find((f) => f.name === "Graduation Year").value;
      const eAddress = form.fields.find((f) => f.name === "Address").value;
      const eHighlights = form.fields.filter((f) => f.name === "Highlight");

      return (
        <Fragment key={crypto.randomUUID()}>
          <div className="first-row">
            <h2>{eUniversity}</h2>
            <p>
              {eMonthEnd} {eYeartEnd}
            </p>
          </div>

          <div className="second-row">
            <em>{eDegree}</em>
            <em>{eAddress}</em>
          </div>

          <ul>
            {eHighlights.map((h) => {
              return <li key={crypto.randomUUID()}>{h.value}</li>;
            })}
          </ul>
        </Fragment>
      );
    }
  }

  return (
    <div className="cv-display">
      {getPersonalSection()}
      {getWorkSection()}
      {getEducationSection()}
    </div>
  );
}

Display.propTypes = {
  formLists: PropTypes.object,
};

export { Display };
