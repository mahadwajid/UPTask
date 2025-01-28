import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import SearchModal from "../components/SearchModal.tsx";
import DataTable from "../components/DataTable.jsx"; // Reusing DataTable for consistency
import WithAuth from "../components/WithAuth.jsx";

const ViewModels = () => {
  const [models, setModels] = useState([]);
  const [leftNav, setLeftNav] = useState("modals");

  useEffect(() => {
    // Fetch models from the API
    fetch("http://localhost:8080/api/models") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setModels(data))
      .catch((error) => console.error("Error fetching models:", error));
  }, []);

  return (
    <>
      <div className="flex grow">
        <Sidebar leftNav={leftNav} setLeftNav={setLeftNav} />
        <div className="wrapper flex grow flex-col">
          <Header leftNav={leftNav} />
          <main className="grow content pt-5" id="content" role="content">
            <div className="container-fixed" id="content_container">
              <h1 className="text-2xl font-bold mb-6">View Models</h1>
              <div className="overflow-x-auto bg-white shadow rounded-lg p-4">
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-200 text-left">
                      <th className="border border-gray-300 p-3">Name</th>
                      <th className="border border-gray-300 p-3">Hash</th>
                      <th className="border border-gray-300 p-3">Node Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {models.length > 0 ? (
                      models.map((model, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="border border-gray-300 p-3">
                            {model.name}
                          </td>
                          <td className="border border-gray-300 p-3">
                            {model.hashWB}
                          </td>
                          <td className="border border-gray-300 p-3">
                            {model.nodeName}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="3"
                          className="border border-gray-300 p-3 text-center"
                        >
                          No models available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
    </>
  );
};

export default WithAuth(ViewModels);
