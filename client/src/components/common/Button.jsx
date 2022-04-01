import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

export const Button = ({ onClick, onConfirm, confirmText, color, marginBottom, disabled, children }) => {
  const [confirm, setConfirm] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setConfirm(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const btnClass = classNames({
    transition: true,
    uppercase: true,
    rounded: true,
    'w-full': true,
    'px-6': true,
    'py-2.5': true,
    'text-white': true,
    'font-medium': true,
    'text-xs': true,
    'leading-tight': true,
    'shadow-md': true,
    'hover:shadow-lg': true,
    'focus:shadow-lg': true,
    'focus:outline-none': true,
    'focus:ring-0': true,
    'active:shadow-lg': true,
    'duration-150': true,
    'ease-in-out': true,
    'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800': !disabled && !color,
    'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-800': disabled,
    'bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800': !disabled && confirm,
    'bg-green-600 hover:bg-green-700 focus:bg-green-700 active:bg-green-800': !disabled && color === 'green',
    'mt-1': true,
    'mb-2': marginBottom,
  });

  const confirmed = () => {
    setConfirm(!confirm);
    onConfirm();
  };

  return (
    <>
      {confirm ? (
        <button ref={ref} type='button' className={btnClass} onClick={() => confirmed()} disabled={disabled}>
          {confirmText}
        </button>
      ) : (
        <button
          type='button'
          className={btnClass}
          onClick={onConfirm ? () => setConfirm(!confirm) : onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};
