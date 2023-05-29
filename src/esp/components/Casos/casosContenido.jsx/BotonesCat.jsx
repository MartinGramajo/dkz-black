import React from "react";

export const BotonesCat = ({ button, filter }) => {
  return (
    <div className="buttons">
      {button.map((cat, i) => {
        return (
          <button
            key={i}
            type="button"
            onClick={() => filter(cat)}
            className="btn color-naranja"
          >
            <h3 className="peso-bold">{cat}</h3>
          </button>
        );
      })}
    </div>
  );
};
