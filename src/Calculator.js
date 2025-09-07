import React, { useState } from "react";
import "./Calculator.css"; // import CSS
import { evaluate } from "mathjs";

export default function Calculator() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(evaluate(input).toString());
        } catch {
            setInput("Error");
        }
    };

    return (
        <div className="calculator-container">
        <div className="calculator">
            <div className="display">{input || "0"}</div>
            <div className="buttons">
            {[
                "7", "8", "9", "/",
                "4", "5", "6", "*",
                "1", "2", "3", "-",
                "0", ".", "=", "+"
            ].map((btn) => (
                <button
                key={btn}
                className="btn"
                onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
                >
                {btn}
                </button>
            ))}
            <button className="btn clear" onClick={handleClear}>
                Clear
            </button>
            </div>
        </div>
        </div>
    );
}
