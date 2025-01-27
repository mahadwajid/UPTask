import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const WithAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const user = localStorage.getItem("User");
      if (!user) {
        navigate("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
