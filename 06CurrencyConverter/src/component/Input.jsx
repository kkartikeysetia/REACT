import React, { useId } from "react";
// UseId is reacxt hook for generating unique ids thjat can be passed to accesibley attributes (user tap krke acces le skta h)

function Input({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectCurrency = "inr",
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          // Input foield enabled ya disabled (disable property tells)
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            // Agar yeh avaible tohi yeh use krengye
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // yaah int nhi krna lalredy stirng h
          // puch lo enabled ya disabled
          disabled={currencyDisable}
        >
          {currencyOptions.map(
            (
              currency // map har ek value milegye
            ) => (
              // jab bhi loop lago jsx kai andar pass KEY
              <option key={currency} value={currency}>
                {currency}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

export default Input;
