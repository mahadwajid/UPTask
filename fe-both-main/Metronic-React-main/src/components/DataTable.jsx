import { useEffect } from "react";
import { KTDataTable } from "../metronic/core";

const DataTable = () => {
  const apiUrl = "https://fast-api-server-livid.vercel.app/data";

  useEffect(() => {
    const element = document.querySelector("#kt_remote_table"); // Moved selection inside useEffect

    if (!element) {
      console.error("Element not found:", element); // Log if the element is not found
      return; // Exit if the element doesn't exist
    }

    const dataTableOptions = {
      apiEndpoint: apiUrl,
      pageSize: 10,
      columns: {
        status: {
          title: "Status",
          render: (item) => {
            return `
              <span class="badge badge-dot size-2 ${item}">
              </span>
            `;
          },
          createdCell(cell) {
            cell.classList.add("text-center");
          },
        },
        ipAddress: {
          title: "IP Address",
        },
        lastSession: {
          title: "Last Session",
        },
        label: {
          title: "Label",
        },
        method: {
          title: "Method",
        },
      },
    };

    // Initialize KTDataTable
    const dataTable = new KTDataTable(element, dataTableOptions);
    console.log("DataTable initialized:", dataTable); // Log the initialized DataTable instance
  }, [apiUrl]); // Add apiUrl as a dependency if it changes

  return (
    <div className="grid">
      <div className="card card-grid min-w-full">
        <div className="card-header py-5 flex-wrap justify-between ">
          <h3 className="card-title">
            Modelex Nodes
          </h3>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add Node
          </button>
          {/* <label className="switch switch-sm">
            <input
              checked=""
              className="order-2"
              name="check"
              type="checkbox"
              value="1"
            />
            <span className="switch-label order-1">Push Alerts</span>
          </label> */}
        </div>
        <div className="card-body">
          <div id="kt_remote_table">
            <div className="scrollable-x-auto">
              <table
                className="table table-auto table-border align-middle text-gray-700 font-medium text-sm"
                data-datatable-table="true"
              >
                <thead>
                  <tr>
                    <th
                      className="w-[100px] text-center"
                      data-datatable-column="status"
                    >
                      <span className="sort">
                        <span className="sort-label">Status</span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                    <th
                      className="min-w-[250px]"
                      data-datatable-column="ipAddress"
                    >
                      <span className="sort">
                        <span className="sort-label">IP Address</span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                    <th
                      className="min-w-[185px]"
                      data-datatable-column="lastSession"
                    >
                      <span className="sort">
                        <span className="sort-label">Last Session</span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                    <th className="w-[185px]" data-datatable-column="label">
                      <span className="sort">
                        <span className="sort-label">Label</span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                    <th className="w-[185px]" data-datatable-column="method">
                      <span className="sort">
                        <span className="sort-label">Method</span>
                        <span className="sort-icon"></span>
                      </span>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            {/* <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
              <div className="flex items-center gap-2">
                Show
                <select
                  className="select select-sm w-16"
                  data-datatable-size="true"
                  name="perpage"
                ></select>
                per page
              </div>
              <div className="flex items-center gap-4">
                <span data-datatable-info="true"></span>
                <div className="pagination" data-datatable-pagination="true"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
