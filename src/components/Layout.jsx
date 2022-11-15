import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="App">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
