import React, { useState, useEffect } from "react";

import AuthContext from "./AuthContext";

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState();
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setAuthLoading(true);
        const response = await fetch("https://my-json-server.typicode.com/SajaRa20/mockread-api/users");
        if (response.status === 200) {
          setIsAuth(true);
        } else if (response.status === 401) {
          setIsAuth(false);
        } else {
          const data = await response.json();
          setError(data.message || "internal server error");
        }
        setAuthLoading(false);
      } catch (err) {
        setAuthLoading(false);
        setError("An error occurred.");
      }
    })();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, authLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
