import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ price: "", data: "" });
  const [users, setUsers] = useState([{ price: "", data: "" }]);
  const handler = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  const sendUser = (e) => {
    e.preventDefault();
    let a = { ...state };
    let copyUsers = [].concat(users);
    copyUsers.push(a);
    console.log(copyUsers);

    setUsers(copyUsers);
  };
  console.log(users);
  return (
    <div className="container mx-auto px-4">
      <h1 className="my-5 text-5xl text-center font-bold">карточка клiента</h1>
      <h2 className="my-3 text-3xl text-center font-bold">ф и о </h2>
      <form onSubmit={sendUser}>
        {/* <label className="relative block">
          Name
          <input
            onChange={handler}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Искать что угодно..."
            type="text"
            name="firstName"
            value={state.firstName}
          />
        </label> */}
        <label className="relative block">
          data
          <input
            onChange={handler}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Искать что угодно..."
            type="text"
            name="data"
          />
        </label>
        <label className="relative block">
          price
          <input
            onChange={handler}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Искать что угодно..."
            type="text"
            name="price"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          add user
        </button>
      </form>
      <table className="w-full  mx-auto table-autoborder border-slate-400 ">
        <thead>
          <tr>
            <th className="border border-slate-300 ">цiна</th>
            <th className="border border-slate-300 ">дата</th>
            <th className="border border-slate-300 ">1</th>
            <th className="border border-slate-300 ">2</th>
            <th className="border border-slate-300 ">3</th>
            <th className="border border-slate-300 ">4</th>
            <th className="border border-slate-300 ">5</th>
            <th className="border border-slate-300 ">6</th>
            <th className="border border-slate-300 ">7</th>
            <th className="border border-slate-300 ">8</th>
            <th className="border border-slate-300 ">9</th>
            <th className="border border-slate-300 ">10</th>
            <th className="border border-slate-300 ">11</th>
            <th className="border border-slate-300 ">12</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td className="border border-slate-300">{user.price}</td>
                <td className="border border-slate-300">{user.data}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
