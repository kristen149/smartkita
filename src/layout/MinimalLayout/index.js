import { Routes, Route } from "react-router-dom";
import Login from 'pages/authentication/Login';
import Register from "pages/authentication/Register";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
  <>
  {/* TEMPORARY SOLUTION */}
    <Routes>
      <Route path="/" element={<Login />
      } />
      <Route path="/login" element={<Login />
      } />
      <Route path="/register" element={<Register />
      } />


    </Routes>

  </>
);

export default MinimalLayout;
