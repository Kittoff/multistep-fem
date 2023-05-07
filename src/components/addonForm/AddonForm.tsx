import { Fragment } from "react";
import FormWrapper from "../formWrapper/FormWrapper";
import "./addForm.scss";
import { AddOns } from "../../tools/types.js";

type Props = {
  addOns: AddOns[];
  addOrRemove: (parameter: AddOns) => void;
  newAddOns: AddOns[];
};

// type AddOns = string[] & {
//   includes: (value: string) => boolean;
// };

const AddonForm = ({ addOns, addOrRemove, newAddOns }: Props) => {
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
                <input
                  type="checkbox"
                  name="checkbox"
                  value={addon.title}
                  onChange={() => addOrRemove(addon.title)}
                  checked={newAddOns.includes(addon.title) ? true : false}
                />
                <div className="addon-text">
                  <p className="addon-title">{addon.title}</p>
                  <span>{addon.subtitle}</span>
                </div>
              </label>
            </Fragment>
          );
        })}
      </div>
    </FormWrapper>
  );
};

export default AddonForm;
