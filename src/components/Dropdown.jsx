import React from 'react';

const DropdownMenu = ({ options, selectedValue, onSelectedChange, select }) => {
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    onSelectedChange(newValue);
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange} className='px-4 py-2 border-border-color border rounded-[8px] w-full mt-1 outline-none hover:border-primary-green focus:border-primary-green'>
        <option disabled value="" className='text-xxSmall md:text-xSmall'>{select}</option>
      {options.map((option, index) => (
        <option key={index} value={option} className='text-xxSmall md:text-xSmall'>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
