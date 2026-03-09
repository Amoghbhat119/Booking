import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import { toast } from "react-toastify";
import { institutions, InstitutionList, DepartmentList } from "../Institutions";

const Signup = () => {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    institution: "",
    department: "",
    password: "",
    cpassword: "",
    adminKey: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const PostData = async (e) => {
    e.preventDefault();
    setAuthStatus("");

    if (user.password !== user.cpassword) {
      setAuthStatus("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Sign Up Successful!");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setAuthStatus(error.response.data.error);
      } else {
        setAuthStatus("Server error. Please try again.");
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="text-gray-600 body-font my-10 min-h-screen flex items-center justify-center bg-white">
          <div className="lg:w-2/6 md:w-1/2 my-10 bg-white shadow-2xl shadow-blue-200 rounded-lg p-8 flex flex-col md:ml-auto md:mr-auto mt-10 md:mt-0">

            <form onSubmit={PostData}>

              <h3 className="text-3xl my-8 sm:text-4xl font-extrabold text-gray-900">
                Sign <span className="text-indigo-600">Up</span>
              </h3>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  placeholder="Full Name"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Email"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Phone
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  placeholder="Phone"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Role
                </label>
                <select
                  name="userType"
                  value={user.userType}
                  onChange={handleInputs}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="director">Director</option>
                  <option value="hod">HOD</option>
                  <option value="faculty">Faculty</option>
                  {process.env.REACT_APP_ADMIN_SIGN_UP === "true" && (
                    <option value="admin">Admin</option>
                  )}
                </select>
              </div>

              {user.userType === "admin" ? (
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-700 uppercase">
                    Admin Key
                  </label>
                  <input
                    type="text"
                    name="adminKey"
                    value={user.adminKey}
                    onChange={handleInputs}
                    placeholder="Admin Key"
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-gray-700 uppercase">
                      Institution
                    </label>
                    <select
                      name="institution"
                      value={user.institution}
                      onChange={handleInputs}
                      className="w-full border rounded px-3 py-2"
                    >
                      <option value="">Select</option>
                      {Object.keys(InstitutionList).map((key) => (
                        <option key={key} value={key}>
                          {InstitutionList[key]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {user.institution && user.userType !== "director" && (
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-gray-700 uppercase">
                        Department
                      </label>

                      <select
                        name="department"
                        value={user.department}
                        onChange={handleInputs}
                        className="w-full border rounded px-3 py-2"
                      >
                        <option value="">Select</option>

                        {institutions
                          .find(
                            (inst) =>
                              inst.name === InstitutionList[user.institution]
                          )
                          ?.departments.map((dept, index) => (
                            <option
                              key={index}
                              value={Object.keys(DepartmentList).find(
                                (key) => DepartmentList[key] === dept
                              )}
                            >
                              {dept}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                </>
              )}

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Password
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-700 uppercase">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {authStatus && (
                <p className="text-red-600 font-bold mb-4">{authStatus}</p>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 rounded"
              >
                Sign Up
              </button>

              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Signup;