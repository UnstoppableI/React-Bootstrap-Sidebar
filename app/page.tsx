"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import AddCourseForm from "@/components/AddCourseForm";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          marginLeft: sidebarOpen ? "260px" : "0",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main style={{ backgroundColor: "#f8f9fa" }}>
          <AddCourseForm />
        </main>
      </div>
    </div>
  );
}
