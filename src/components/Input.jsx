import React from "react";

const Input = ({ input, inputSearch, setInput }) => {
  return (
    <div className="input-container">
      <div className="form-outer">
        <div className="container-input">
          <form className="form" onSubmit={inputSearch}>
            <div className="form-input">
              <input
                className="input"
                type="text"
                value={input}
                placeholder="Sé que quieres buscar algo..."
                onChange={e => setInput(e.target.value)}
              />
              <span className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
