import React, { ChangeEvent, memo, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
// import { CheckIcon } from '@radix-ui/react-icons';
import { Check } from 'phosphor-react';
import './styles.css';

interface checkboxProps {
  title: string;
  checked: boolean,
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckboxDemo: React.FC<checkboxProps> = ({ title, checked, setChecked }) => {

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  console.log(checked);

  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center' }}>

        <input type="checkbox"
          className=" w-6
                      h-6
                      rounded-full
                      d-flex
                      items-center
                      justify-center
                      shadow-lg
                      border-solid border-2.5 border-GRAY
                      hover:bg-sky-100
                      focus:outline-none
                      focus:ring"
          id="c1" checked={checked} onChange={handleCheckboxChange} />

        <label className="Label text-GRAY " htmlFor="c1">{title}</label>

      </div>
    </form>
  );
}
export default memo(CheckboxDemo);

/* <Checkbox.Root className="w-6
                        h-6
                        rounded-full
                        d-flex
                        items-center
                        justify-center
                        shadow-lg
                        border-solid border-2.5 border-GRAY
                        hover:bg-sky-100
                        focus:outline-none
                        focus:ring"
  id="c1">

  <Checkbox.Indicator className="CheckboxIndicator" defaultChecked={checked}>
    <Check
      className="text-GRAY m-auto"
      weight='bold'
      size={19}
      onChange={() => handleCheckboxChange}
    />
  </Checkbox.Indicator>

</Checkbox.Root> */