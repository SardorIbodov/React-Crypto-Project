import React, { useContext, useEffect, useState } from "react";
import { Layout, Spin } from "antd";
import { AppHeader } from "./AppHeader";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { CryptoContext } from "../../context/crypto-context";

export const AppLayout = () => {
  const { loading } = useContext(CryptoContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  if (loading) return <Spin fullscreen />;

  return (
    <Layout>
      <AppHeader />
      <Layout>
        {windowWidth > 1000 && <AppSider />}
        <AppContent />
      </Layout>
    </Layout>
  );
};
