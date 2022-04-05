import { InputLabel } from '../label/InputLabel';
import classNames from 'classnames';

export const SelectInput = ({ id, labelText, options, value, onSelect: setState, disabled, marginTop }) => {
  const inputClass = classNames({
    border: true,
    rounded: true,
    'focus:ring-indigo-500': true,
    'focus:border-indigo-500': true,
    'w-full': true,
    'px-3': true,
    'py-1.5': true,
    'mb-5': true,
    'border-gray-900': !disabled,
    'text-gray-900': !disabled,
    'border-gray-600': disabled,
    'text-gray-600': disabled,
  });

  const updateState = (event) => {
    setState(event.target.value);
  };

  const mapOptions = () => {
    return options.map((value) => (
      <option key={value.id} value={value.id}>
        {value.name}
      </option>
    ));
  };

  const optionElements = options ? mapOptions() : [];

  return (
    <>
      <InputLabel for={id} marginTop={marginTop}>
        {labelText}
      </InputLabel>
      <select id={id} name={id} value={value} className={inputClass} onChange={updateState} disabled={disabled}>
        {optionElements}
      </select>
    </>
  );
};
