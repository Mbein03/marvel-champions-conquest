export const SelectInput = ({
  id,
  name,
  data,
  value,
  onValueChange: setState,
  disabled,
}) => {
  // Update state in controller
  const updateValue = (event) => {
    setState(event.target.value);
  };

  // Iterate over data and map options
  const mapOptions = (data) => {
    return data.map((data) => (
      <option key={data.id} value={data.name}>
        {data.name}
      </option>
    ));
  };

  const options = data ? mapOptions(data) : [];

  return (
    <>
      <div className='form-group mb-6'>
        <select
          id={id}
          name={name}
          value={value}
          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          onChange={updateValue}
          disabled={disabled}
        >
          {options}
        </select>
      </div>
    </>
  );
};
