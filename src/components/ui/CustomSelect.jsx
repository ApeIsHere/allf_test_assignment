import { useState, useRef } from "react";
import useOutsideClickAndEscape from "../../hooks/useOutsideClickAndEscape";

// CustomSelect: Reusable dropdown for single or multi-select
function CustomSelect({
  options,
  selectedOptions,
  onChange,
  isMulti = true,
  placeholder = "Select options",
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionChange = (option) => {
    if (isMulti) {
      // Multi-select: Add/remove option
      if (selectedOptions.includes(option)) {
        onChange(selectedOptions.filter((opt) => opt !== option));
      } else {
        onChange([...selectedOptions, option]);
      }
    } else {
      // Single-select: Replace with new option and close dropdown
      onChange([option]);
      setIsDropdownOpen(false);
    }
  };

  // Handle click outside and Escape key to close dropdown
  useOutsideClickAndEscape(selectRef, () => setIsDropdownOpen(false));

  return (
    <div className="select" ref={selectRef}>
      <div
        className={`select__input ${isDropdownOpen ? "select__input--opened" : ""}`}
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? selectedOptions.join(", ") : placeholder}
        <img
          className={`select__arrow ${isDropdownOpen ? "select__arrow--opened" : ""}`}
          src="icons/InputsIcon.svg"
          alt="Chevron arrow down"
        />
      </div>
      {isDropdownOpen && (
        <ul className={`select__dropdown ${isMulti ? "" : "select__dropdown--single"}`}>
          {options.map((option) => (
            <li
              key={option}
              className={`select__option ${
                selectedOptions.includes(option) ? "select__option--selected" : ""
              }`}
              onClick={() => handleOptionChange(option)}
            >
              {isMulti ? (
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              ) : (
                <span>{option}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
