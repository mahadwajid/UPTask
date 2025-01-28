import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import KTComponent from "../metronic-tailwind-html/src/core/index.ts";
import KTLayout from "../metronic-tailwind-html/src/app/layouts/demo1.js";
import SearchModal from "../components/SearchModal.tsx";
import DataTable from "../components/DataTable.jsx";
import WithAuth from "../components/WithAuth.jsx";

const ViewNodes = () => {
  const [leftNav, setLeftNav] = useState("nodes");
  const [nodes, setNodes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newNode, setNewNode] = useState({ fqdn: "", rpcPort: "" });
  const apiUrl = "https://your-api-endpoint-here.com/nodes"; // Replace with your API endpoint

  useEffect(() => {
    KTComponent.init();
    KTLayout.init();

    const fetchNodes = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNodes(data);
      } catch (error) {
        console.error("Error fetching nodes:", error);
      }
    };

    fetchNodes();
  }, [apiUrl]);

  const handleRefresh = async (rpcPort) => {
    try {
      const response = await fetch(`${apiUrl}/refresh/${rpcPort}`);
      const updatedNode = await response.json();
      setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.rpcPort === rpcPort ? { ...node, ...updatedNode } : node
        )
      );
    } catch (error) {
      console.error("Error refreshing node:", error);
    }
  };

  const handleAddNode = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNode),
      });
      if (response.ok) {
        const addedNode = await response.json();
        setNodes((prevNodes) => [...prevNodes, addedNode]);
        setShowModal(false);
        setNewNode({ fqdn: "", rpcPort: "" });
      } else {
        console.error("Failed to add node:", await response.text());
      }
    } catch (error) {
      console.error("Error adding node:", error);
    }
  };

  return (
    <>
      <div className="flex grow">
        <Sidebar leftNav={leftNav} setLeftNav={setLeftNav} />
        <div className="wrapper flex grow flex-col">
          <Header leftNav={leftNav} />
          <main className="grow content pt-5" id="content" role="content">
            <div className="container-fixed" id="content_container"></div>
            <div className="container-fixed">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div className="card bg-white shadow-md rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Modelex Nodes</h3>
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                      Add Node
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse text-sm text-gray-700">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left">Name</th>
                          <th className="px-4 py-2 text-left">FQDN</th>
                          <th className="px-4 py-2 text-left">RPC Port</th>
                          <th className="px-4 py-2 text-left">P2P Port</th>
                          <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {nodes.map((node) => (
                          <tr key={node.rpcPort} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2">{node.name}</td>
                            <td className="px-4 py-2">{node.fqdn}</td>
                            <td className="px-4 py-2">{node.rpcPort}</td>
                            <td className="px-4 py-2">{node.p2pPort}</td>
                            <td className="px-4 py-2 text-center">
                              <button
                                onClick={() => handleRefresh(node.rpcPort)}
                                className="text-blue-500 hover:text-blue-700"
                              >
                                <i className="ki-filled ki-refresh text-xl"></i> {/* Refresh icon */}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">Add Node</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                FQDN
              </label>
              <input
                type="text"
                value={newNode.fqdn}
                onChange={(e) => setNewNode({ ...newNode, fqdn: e.target.value })}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                RPC Port
              </label>
              <input
                type="text"
                value={newNode.rpcPort}
                onChange={(e) =>
                  setNewNode({ ...newNode, rpcPort: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddNode}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <SearchModal />
    </>
  );
};

export default WithAuth(ViewNodes);
