import { InputLabel } from './InputLabel';

export const TextInput = ({ id, labelText, onType: setState }) => {
  const updateState = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <InputLabel for={id}>{labelText}</InputLabel>
      <div className='relative rounded-md shadow-sm mb-1'>
        <input
          type='text'
          id={id}
          name={id}
          className='focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 border border-gray-900 rounded-md'
          onInput={updateState}
        />
      </div>
    </>
  );
};
