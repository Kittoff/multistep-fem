import React from "react";
import FormWrapper from "../formWrapper/FormWrapper";

const InfoForm = () => {
  return (
    <FormWrapper
      title="Personal Info"
      description="Please provide your name, email address, and phone number."
    >
      <label htmlFor="name">Name</label>
      <input placeholder="e.g. Stephen King" type="text" autoFocus required />
      <label htmlFor="email">Email Adress</label>
      <input placeholder="e.g. stephenking@lorem.com" type="email" required />
      <label placeholder="e.g. +1 234 567 890" htmlFor="phone">
        Phone Number
      </label>
      <input placeholder="e.g. +1 234 567 890" type="text" required />
    </FormWrapper>
  );
};

export default InfoForm;
