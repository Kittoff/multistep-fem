import React from "react";
import FormWrapper from "../formWrapper/FormWrapper";

const InfoForm = () => {
  return (
    <FormWrapper title="Personal Info" description="description">
      <label htmlFor="name">Name</label>
      <input type="text" autoFocus required />
      <label htmlFor="email">Email Adress</label>
      <input type="email" required />
      <label htmlFor="phone">Phone Number</label>
      <input type="text" required />
    </FormWrapper>
  );
};

export default InfoForm;
