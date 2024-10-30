import React from 'react';

const SimpleForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.textInput.value);
    console.log(event.target.emailInput.value);
  };
  return (
    <div className="m-2 font-bold flex flex-col justify-center items-center text-center">
      <h2 className="text-xl font-bold ">
        Simple Form Submit Practice and show on the console
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-2 border rounded-lg p-3 m-3"
      >
        <input className="border-2 block" type="text" name="textInput" />

        <input className="border-2 block" type="email" name="emailInput" />
        <input
          className="border bg-green-100 hover:bg-green-300 px-3 py-1 rounded-lg"
          type="submit"
          name=""
          id=""
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SimpleForm;
