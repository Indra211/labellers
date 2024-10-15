import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [selectable, setSelectable] = useState("file");
  const navigate = useNavigate();
  return (
    <div>
      <header className=" sticky w-full p-2 flex items-center justify-center gap-6 bg-slate-200">
        <p
          className="text-xl font-medium cursor-pointer"
          onClick={() => {
            navigate("/");
            setSelectable("file");
          }}
          style={{ color: selectable === "file" ? "red" : "black" }}
        >
          File View
        </p>
        <p
          className="text-xl font-medium cursor-pointer"
          onClick={() => {
            navigate("/group");
            setSelectable("cluster");
          }}
          style={{ color: selectable === "cluster" ? "red" : "black" }}
        >
          Cluster View
        </p>
      </header>{" "}
      <Outlet />
    </div>
  );
}

export default App;
