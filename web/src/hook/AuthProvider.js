import { useNavigate } from "react-router-dom";
import { setUsername, setEmployeeId } from "../storage";
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [type, setType] = useLocalStorage("type", null);

  const login = async (data) => {
    setType(data.userType);
    setUsername(data.username);
    setEmployeeId(data.employeeId);
    // if (data.userType === "user") navigate("/attendance");
    // if (data.userType === "admin") navigate("/staffAttendance");
  };
  const logout = () => {
    setType("none");
    setUsername("");
    setEmployeeId("");
    navigate("/", { replace: true });
  };
  const value = useMemo(
    () => ({
      type,
      login,
      logout,
    }),
    [type]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
