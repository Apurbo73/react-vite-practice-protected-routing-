// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             Protected Routing
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/add-blog">
//                   Add Blog
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="about-us">
//                   About Us
//                 </Link>
//               </li>
//               {isLoggedIn
//                 ? <button
//                     className="btn btn-warning"
//                     onClick={() => {
//                       setIsLoggedIn(!isLoggedIn);
//                     }}
//                   >
//                     Sign Out
//                   </button>
//                 : <button
//                     className="btn btn-warning"
//                     onClick={() => {
//                       setIsLoggedIn(!isLoggedIn);
//                     }}
//                   >
//                     Sign in
//                   </button>}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
