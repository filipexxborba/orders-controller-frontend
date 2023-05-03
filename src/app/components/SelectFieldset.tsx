"use client";

import { useEffect, useState } from "react";
import { Options } from "react-select";
import Select from "react-select";

interface SelectFieldsetProps {
   id: string;
   title: string;
   options: Options<any>;
   state: any;
   dispatch: Function;
}

const SelectFieldset = ({
   id,
   title,
   options,
   state,
   dispatch,
}: SelectFieldsetProps) => {
   const handleSelectChange = (event: any) => {
      dispatch({ ...state, [id]: { value: event.value, label: event.label } });
   };

   return (
      <fieldset className="flex flex-col items-start gap-1 w-72">
         <label className="text-sm font-medium text-gray-800" htmlFor={id}>
            {title}
         </label>
         <Select
            className="w-full"
            options={options}
            onChange={(event) => handleSelectChange(event)}
            value={state[id]}
            id={id}
            placeholder="Selecione"
         />
      </fieldset>
   );
};

export default SelectFieldset;
