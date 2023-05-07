import React, { useState } from "react";
import "./planCard.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Plans } from "../../../tools/types.js";

type Props = {
  plan: Plans;
  isSelected: boolean;
  onSelect: () => void;
  isMonthly: boolean;
};

export const PlanCard = ({ plan, isSelected, onSelect, isMonthly }: Props) => {
  const cardClass = `plan-card ${isSelected ? "selected" : ""}`;

  return (
    <div className={cardClass} onClick={onSelect}>
      <div className="plan-icon">
        <img src={plan.icon} alt={plan.title} />
      </div>
      <div>
        <div className="plan-title">{plan.title}</div>
        <div className="plan-text">
          {plan.prices.map((price) =>
            isMonthly ? price.monthly : price.yearly
          )}
        </div>
        {!isMonthly && <div className="yearly-offer">2 months free</div>}
      </div>
    </div>
  );
};
