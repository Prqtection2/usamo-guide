import React from 'react';
import Select from 'react-select';
import { useDarkMode } from '../context/DarkModeContext';
export default function StyledSelect(props) {
  const darkMode = useDarkMode();
  return (
    <Select
      className={`tw-forms-disable text-left ${props.className}`}
      styles={
        !darkMode
          ? undefined
          : {
              control: provided => ({
                ...provided,
                backgroundColor: 'var(--select-bg)',
                borderColor: 'var(--select-border)',
              }),
              menuList: provided => ({
                ...provided,
                borderColor: 'var(--select-border)',
                borderWidth: '1px',
                borderRadius: '6px',
              }),
              menu: provided => ({
                ...provided,
                backgroundColor: 'var(--select-menu-bg)',
              }),
              indicatorSeparator: provided => ({
                ...provided,
                backgroundColor: 'var(--select-border)',
              }),
              indicatorsContainer: provided => ({
                ...provided,
                color: 'var(--select-border)',
              }),
              singleValue: provided => ({
                ...provided,
                color: 'var(--select-text)',
              }),
              input: provided => ({
                ...provided,
                color: 'var(--select-text)',
              }),
              option: (provided, { isFocused, isSelected }) => ({
                ...provided,
                ...(isFocused
                  ? {
                      backgroundColor: 'var(--select-option-hover)',
                    }
                  : isSelected
                    ? { backgroundColor: 'var(--select-option-selected)' }
                    : {}),
              }),
            }
      }
      {...props}
    />
  );
}
