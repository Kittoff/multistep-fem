import React, { Fragment, useState } from "react";
import FormWrapper from "../formWrapper/FormWrapper";
import { Checkbox } from "primereact/checkbox";
import "./addForm.scss";

const addOns = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
  },
  {
    title: "Customizable profile",
    subtitle: "Custom theme on your profile",
  },
];

const AddonForm = () => {
  const [addons, setAddons] = useState<any[]>([]);

  const onChange = (e: any) => {
    let selectedCities = [...addons];
    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setAddons(selectedCities);
  };
  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div>
        {addOns.map((addon: any) => {
          return (
            <Fragment key={addon.title}>
              <label className="addon-label">
                <input type="checkbox" name="checkbox" value={addon.title} />
                <div className="addon-text">
                  <p className="addon-title">{addon.title}</p>
                  <span>{addon.subtitle}</span>
                </div>
              </label>
              {/* <Checkbox
                inputId={addon.title}
                value={addon.title}
                onChange={onChange}
                checked={addons.includes(addon.title)}
              />
              <label htmlFor={addon.title} className="p-checkbox-label">
                {addon.title}
              </label> */}
            </Fragment>
          );
        })}
      </div>
    </FormWrapper>
  );
};

export default AddonForm;
