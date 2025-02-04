import React, { useState } from "react";
const User = require("../models/users.cjs");

let initialState = {
  username: "",
  password: "",
  email: "",
  mobile: "",
  gender: "",
  city: "",
};

function Home() {
  let [users, setUsers] = useState([]);
  let [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    gender: "",
    city: "",
  });

  let handleInput = (event) => {
    let { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  let addNewUser = () => {
    try {
    } catch (e) {}
    setUsers([...users, { ...newUser }]);
    setNewUser({
      ...initialState,
    });
  };

  let deleteUser = (index) => {
    let _users = [...users];
    _users.splice(index, 1);
    setUsers(_users);
  };

  return (
    <>
      <main className="container">
        <section className="row justify-content-center mt-4">
          <section className="col-5 shadow border p-4 rounded-4">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                name="username"
                value={newUser.username}
                placeholder="name@example.com"
                onChange={handleInput}
              />
              <label for="floatingInput">
                <i class="fa-solid fa-user text-primary"></i> Username
              </label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                name="password"
                value={newUser.password}
                placeholder="Password"
                onChange={handleInput}
              />
              <label for="floatingPassword">
                <i class="fa-solid fa-key text-danger"></i> Password
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                name="email"
                value={newUser.email}
                placeholder="name@example.com"
                onChange={handleInput}
              />
              <label for="floatingInput">
                <i class="fa-solid fa-envelope text-primary"></i> Email address
              </label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="mobile"
                class="form-control"
                id="floatingMobile"
                name="mobile"
                value={newUser.mobile}
                placeholder="mobile"
                onChange={handleInput}
              />
              <label for="floatingMobile">
                <i class="fa-solid fa-phone text-danger"></i> Mobile
              </label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                name="gender"
                value={newUser.gender}
                placeholder="name@example.com"
                onChange={handleInput}
              />
              <label for="floatingInput">
                <i class="fa-solid fa-person text-primary"></i> Gender
              </label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                name="city"
                value={newUser.city}
                placeholder="name@example.com"
                onChange={handleInput}
              />
              <label for="floatingInput">
                <i class="fa-solid fa-city text-primary"></i> City
              </label>
            </div>

            <div className="mb-3 text-center">
              <button className="btn btn-primary px-5" onClick={addNewUser}>
                Save <i className="fa fa-save"></i>
              </button>
            </div>
          </section>
        </section>

        <section className="row justify-content-center mt-4 ">
          <section className="border pt-3">
            <table className="table" border="1">
              <thead>
                <tr>
                  <th width="5%">Sr.No</th>
                  <th width="20%">Username</th>
                  <th width="30%">Email</th>
                  <th width="20%">Mobile</th>
                  <th width="10%">Gender</th>
                  <th width="10%">City</th>
                  <th width="5%">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.gender}</td>
                      <td>{user.city}</td>
                      <td>
                        <button
                          className="btn text-center btn-btn-outline-danger"
                          onClick={(index) => {
                            deleteUser(index);
                          }}
                        >
                          <i className="fa fa-trash text-danger "></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
