import React from 'react';

export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}) {
  return (
    <fieldset className='mt-3'>
      <legend className='text-xl font-semibold'>{name}</legend>
      <div className='inline-flex items-center flex-wrap'>
        {values.map((value) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                className='sr-only'
                type='radio'
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`p-2 mt-3 text-lg rounded-full block cursor-pointer mr-3 ${
                  checked
                    ? 'text-gray-200 bg-gray-800'
                    : 'text-gray-800 bg-gray-200'
                }`}
              >
                <span className='px-2'>{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
