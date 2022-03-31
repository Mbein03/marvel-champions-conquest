import { InputLabel } from './InputLabel';
import classNames from 'classnames';

export const SelectInput = ({ id, labelText, options, value, onSelect: setState, disabled }) => {
  const inputClass = classNames({
    'focus:ring-indigo-500': true,
    'focus:border-indigo-500': true,
    'w-full': true,
    rounded: true,
    'px-3': true,
    'py-1.5': true,
    'mb-4': true,
    border: true,
    'border-gray-900': !disabled,
    'text-gray-900': !disabled,
    'border-gray-600': disabled,
    'text-gray-600': disabled,
  });

  const updateState = (event) => {
    setState(event.target.value);
  };

  const mapOptions = (options) => {
    return options.map((value) => (
      <option key={value.id} value={value.id}>
        {value.name}
      </option>
    ));
  };

  const selectOptions = options ? mapOptions(options) : [];

  return (
    <>
      <InputLabel for={id}>{labelText}</InputLabel>
      <select id={id} name={id} value={value} className={inputClass} onChange={updateState} disabled={disabled}>
        {selectOptions}
      </select>
    </>
  );
};
