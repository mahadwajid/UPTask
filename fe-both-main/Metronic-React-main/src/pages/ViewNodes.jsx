import Sidebar from "../components/Sidebar.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import KTComponent from "../metronic-tailwind-html/src/core/index.ts";
import { useEffect, useState } from "react";
import KTLayout from "../metronic-tailwind-html/src/app/layouts/demo1.js";
import SearchModal from "../components/SearchModal.tsx";
import DataTable from "../components/DataTable.jsx";
import WithAuth from "../components/WithAuth.jsx";

const ViewNodes = () => {
  const [leftNav, setLeftNav] = useState("nodes");
  const [nodes, setNodes] = useState([]);
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
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
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
      <SearchModal />
    </>
  );
};

export default WithAuth(ViewNodes);
