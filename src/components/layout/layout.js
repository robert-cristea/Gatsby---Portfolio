import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import Footer from "./footer"

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-nexa-regular text-black bg-white">
      <Header />
      <main className="flex-1 w-full mx-auto" style={{ maxWidth: 1366 }}>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
