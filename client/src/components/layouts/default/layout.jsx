import { Outlet } from "react-router-dom";
import DefaultFooterLayout from "./footer/footer-layout";
import DefaultHeaderLayout from "./header/header-layout";
import DefaultMainLayout from "./main/main-layout";
import DefaultMetaLayout from "./meta/meta-layout";
import { useSelector } from "react-redux";

const DefaultLayout = ({ userType }) => {
  const loggedInData = useSelector((state) => state.user);
  return (
    <div>
      {/* <DefaultMetaLayout /> */}
      <DefaultHeaderLayout userType={userType} />
      <DefaultMainLayout userType={userType}>
        <Outlet />
      </DefaultMainLayout>
      <DefaultFooterLayout />
    </div>
  );
};

export default DefaultLayout;
