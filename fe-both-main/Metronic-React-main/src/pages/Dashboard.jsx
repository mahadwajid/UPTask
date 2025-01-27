import Sidebar from "../components/Sidebar.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import KTComponent from "../metronic/core/index.ts";
import { useEffect, useState } from "react";
import KTLayout from "../metronic/app/layouts/demo1.js";
import SearchModal from "../components/SearchModal.tsx";
import DataTable from "../components/DataTable.jsx";
import WithAuth from "../components/WithAuth.jsx";
const Dashboard = () => {
  useEffect(() => {
    KTComponent.init();
    KTLayout.init();
  }, []);
  const [leftNav, setLeftNav] = useState("dashboard");
  return (
    <>
      <div className="flex grow">
        <Sidebar leftNav={leftNav} setLeftNav={setLeftNav}/>
        <div className="wrapper flex grow flex-col">
          <Header leftNav = {leftNav}/>
          <main className="grow content pt-5" id="content" role="content">
            <div className="container-fixed" id="content_container"></div>
            <div className="container-fixed">
              <DataTable />
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
    </>
  );
};

export default WithAuth(Dashboard);
