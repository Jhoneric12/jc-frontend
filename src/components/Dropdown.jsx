import React from 'react';

const Dropdown = ({ options, selectedValue, dropDownName, selectedChange, select }) => {
  return (
    <select
      name={dropDownName}
      value={selectedValue}
      onChange={selectedChange}
      className='form-select px-4 py-2 border-border-color border rounded-[8px] w-full mt-1 outline-none hover:border-primary-green focus:border-primary-green focus:bg-white focus:ring focus:ring-primary-green focus:ring-opacity-50 '
    >
      <option disabled selected value="" style={{ color: '#C1C1C1' }}>
        {select}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
