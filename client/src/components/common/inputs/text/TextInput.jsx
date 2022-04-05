import { InputLabel } from '../label/InputLabel';

export const TextInput = ({ id, labelText, value, onType: setState }) => {
  const updateState = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <InputLabel for={id}>{labelText}</InputLabel>
      <input
        type='text'
        id={id}
        name={id}
        value={value}
        className='focus:ring-indigo-500 focus:border-indigo-500 w-full px-3 py-1 border border-gray-900 rounded-md mb-4'
        onInput={updateState}
      />
    </>
  );
};
