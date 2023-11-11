"use client";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { EventComponent } from "@/lib/actions";
import { PencilIcon } from "@heroicons/react/24/outline";

export const CalendarInput: EventComponent = ({
  name,
  errors,
  onDateSelect,
}) => {
  console.log(onDateSelect);
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {name}
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <Flatpickr
            id={name}
            name={name}
            data-enable-time
            options={{
              dateFormat: "d/m/y",
              minDate: "today",
              mode: "range",
            }}
            onChange={(selectedDates) => {
              if (onDateSelect && selectedDates.length === 2) {
                onDateSelect(selectedDates[0], selectedDates[1]);
              }
            }}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:bg-gray-800"
          />
          <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
      </div>

      {errors ? (
        <div
          id="amount-error"
          aria-live="polite"
          className="mt-2 text-sm text-red-500"
        >
          {errors.join(", ")}
        </div>
      ) : null}
    </div>
  );
};