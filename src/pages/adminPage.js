import React from "react";
import { useSpring, animated } from "react-spring";
import { FiTool } from "react-icons/fi";
import Layout from "@/components/layout/Layout";

const AdminPage = () => {
  const animationProps = useSpring({
    from: { marginTop: 0 },
    to: async (next) => {
      while (true) {
        await next({ marginTop: 20 });
        await next({ marginTop: 0 });
      }
    },
    config: { tension: 200, friction: 15 },
  });

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <animated.div style={animationProps}>
          <span style={{ fontSize: "4rem", color: "white" }}>
            <FiTool />
          </span>
        </animated.div>
        <div className="text-white text-4xl">En cours de construction</div>
      </div>
    </Layout>
  );
};

export default AdminPage;
