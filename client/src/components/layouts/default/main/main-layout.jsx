import { Outlet, useLocation } from "react-router-dom";
import { getContainerClassName, getSidebarClassName } from "./functions";
import Sidebar from "./sidebar/sidebar";
import Itmanager from "../../../pages/itmanager/Itmanager";
import Student from "../../../pages/student/Student";
import { useEffect, useState } from "react";
import EduManager from "../../../pages/edumanager/EduManager";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsList } from "../../../../redux/actions/studentAction";
import { getManagersList } from "../../../../redux/actions/managerAction";
import { getProfessorList } from "../../../../redux/actions/professorAction";
import { Toaster, toast } from "react-hot-toast";

var initialRequest = true;

const DefaultMainLayout = ({ userType }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const studentsData = useSelector((state) => state.student);
  const user = useSelector((state) => state.user);

  const [menuRoute, setMenuRoute] = useState(1); //for admin page

  useEffect(() => {
    if (initialRequest) {
      const authData = {
        userType: user?.data?.userType,
        page: 0,
        limit: 10,
      };
      if (user.data.userType === "itmanager") {
        dispatch(getStudentsList(authData)); // call api to get list of students
        dispatch(getManagersList(authData)); // call api to get list of managers
        dispatch(getProfessorList(authData)); // call api to get list of professors
      } else if (user.data.userType === "edumanager") {
        dispatch(getStudentsList(authData)); // call api to get list of students
        dispatch(getProfessorList(authData)); // call api to get list of professors
      }
    }

    return () => {
      initialRequest = false;
    };
  }, [dispatch, user]);

  useEffect(() => {
    if (!studentsData?.students?.length) {
      toast.loading("در حال دریافت اطلاعات. لطفا صبور باشید", {
        duration: 3000,
      });
    }
    if (studentsData?.error) {
      toast.error("خطا در دریافت اطلاعات لطفا صحفه را رفرش کنید", {
        duration: 2000,
      });
    }
  }, [studentsData]);

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="w-full flex flex-row justify-evenly flex-nowrap items-start relative min-h-screen p-0 m-0 bg-dark text-light">
        <aside
          className={`w-full bg-dark ${getSidebarClassName(
            location.pathname
          )} fixed bottom-0 z-10 left-0 md:sticky md:top-0 border-r-[1px] border-secondary`}
        >
          <Sidebar userType={userType} setMenuRoute={setMenuRoute} />
        </aside>
        <section
          className={`w-full ${getContainerClassName(
            location.pathname
          )} flex justify-center custom-scrollbar items-center`}
        >
          {userType === "itmanager" ? (
            <Itmanager menuRoute={menuRoute} />
          ) : userType === "student" ? (
            <Student menuRoute={menuRoute} />
          ) : userType === "edumanager" ? (
            <EduManager menuRoute={menuRoute} />
          ) : null}
        </section>
      </section>
    </main>
  );
};

export default DefaultMainLayout;
