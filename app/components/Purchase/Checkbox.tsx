"use client";

import { useState } from "react";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: React.ReactNode;
  className?: string;
  error?: boolean;
}

export default function Checkbox({
  checked: externalChecked = false,
  onChange,
  children,
  className = "",
  error = false,
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(externalChecked);
  const isControlled = onChange !== undefined;
  const checked = isControlled ? externalChecked : internalChecked;

  const handleChange = () => {
    const newChecked = !checked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  return (
    <label
      className={`flex w-full items-center gap-3 text-sm cursor-pointer self-start ${className} ${error ? "animate-shake" : ""}`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />
      <span
        className={`mt-0.5 h-7 w-7 lg:h-8 lg:w-8 shrink-0 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
          error
            ? "border-red-500 animate-pulse shadow-error"
            : checked
              ? "border-accent bg-transparent"
              : "border-accent"
        }`}
      >
        {checked && (
          <svg width="14" height="10" viewBox="0 0 14 10">
            <path
              d="M1 5L5 9L13 1"
              stroke="#FDB056"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className={`leading-tight text-left text-neutral-300`}>
        {children}
      </span>
    </label>
  );
}
