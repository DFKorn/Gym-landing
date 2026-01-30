"use client";

import { useState } from "react";

export default function AgreementCheckbox() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  return (
    <label
      className={`
        flex items-start gap-2 mt-4 text-xs
        ${error ? "text-red-400" : "text-gray-400"}
      `}
    >
      <input
        type="checkbox"
        className="mt-1"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          setError(false);
        }}
      />
      Я согласен с условиями оферты и Политикой конфиденциальности
    </label>
  );
}
