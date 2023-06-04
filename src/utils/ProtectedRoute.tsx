import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect, useState } from "react";
// Hook Imports
import UseAuth from "@/hooks/UseAuth";

type Props = {
  children: ReactNode;
};

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { SignOut } = UseAuth();
  const router = useRouter();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const checkUserStatus = async () => {
      if (storedUser) {
        setLoading(false);
      } else {
        await SignOut();
        setLoading(false);
      }
    };
    checkUserStatus();
  }, [router.pathname]);

  if (Loading) {
    return <h1>loading</h1>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
