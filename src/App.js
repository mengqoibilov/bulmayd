// import React from "react";
// import Sidebar from "./Sidebar/Sidebar.jsx";
// import Navbar from "./Navbar/Navbar.jsx";
// import Content from "./Content/Content.jsx";


// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Sidebar/>
//       <Content/>
//       </div>
//   );
// };

// export default App;
import React from 'react'
import Navbar from "./Navbar/Navbar.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Content from "./Content/Content.jsx";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Content/>
    </div>
  )
}
