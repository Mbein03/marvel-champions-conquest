export const SelectInput = ({
  id,
  name,
  labelText,
  data,
  value,
  onSelect: setState,
  disabled,
}) => {
  const updateState = (event) => {
    setState(event.target.value);
  };

  const mapOptions = (data) => {
    return data.map((value) => (
      <option key={value.id} value={value.name}>
        {value.name}
      </option>
    ));
  };

  const options = data ? mapOptions(data) : [];

  return (
    <>
      <label
        htmlFor={id}
        className='form-label inline-block mb-2 text-gray-700'
      >
        {labelText}
      </label>
      <div className='form-group mb-6'>
        <select
          id={id}
          name={name}
          value={value}
          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          onChange={updateState}
          disabled={disabled}
        >
          {options}
        </select>
      </div>
    </>
  );
};
