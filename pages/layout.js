import Head from "next/head";
import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
import store from "../RTK/store";
import { urbanist, mulish, dM_Sans } from "../lib/font";

const Layout = ({ children }) => {
  return (
    <div
      className={`${urbanist.variable} ${mulish.variable} ${dM_Sans.variable}`}
    >
      <Head>
        <title>Judy Invest</title>
      </Head>

      <Provider store={store}>
        {children}
        {/* <ToastContainer /> */}
      </Provider>
    </div>
  );
};

export default Layout;
