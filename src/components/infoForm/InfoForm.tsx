import React from "react";
import FormWrapper from "../formWrapper/FormWrapper";

type UserData = {
  name: string;
  email: string;
  phone: string;
};

type Props = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const InfoForm = ({ name, email, phone, updateFields }: Props) => {
  return (
    <FormWrapper
      title="Personal Info"
      description="Please provide your name, email address, and phone number."
    >
      <label htmlFor="name">Name</label>
      <input
        placeholder="e.g. Stephen King"
        type="text"
        autoFocus
        required
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <label htmlFor="email">Email Adress</label>
      <input
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label placeholder="e.g. +1 234 567 890" htmlFor="phone">
        Phone Number
      </label>
      <input
        placeholder="e.g. +1 234 567 890"
        type="text"
        required
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      />
    </FormWrapper>
  );
};

export default InfoForm;
