import { useDispatch } from "react-redux";
import SidebarAccount from "./account/sidebar-account";
import SidebarNavigation from "./navigation/sidebar-navigation";
import { getStudentsList } from "../../../../../redux/actions/studentAction";
import { getManagersList } from "../../../../../redux/actions/managerAction";
import { getProfessorList } from "../../../../../redux/actions/professorAction";

export const adminMenu = [
  {
    type: "itmanager",
    commandNumber: 1,
    title: "مشاهده لیست دانشجویان",
  },
  {
    type: "itmanager",
    commandNumber: 2,
    title: "مشاهده لیست اساتید",
  },
  {
    type: "itmanager",
    commandNumber: 3,
    title: "مشاهده لیست مدیران",
  },
];
export const eduManagerMenu = [
  {
    type: "manager",
    commandNumber: 1,
    title: "مشاهده لیست ترم ها",
  },
  {
    type: "manager",
    commandNumber: 2,
    title: "مشاهده لیست دانشجویان",
  },
  {
    type: "manager",
    commandNumber: 3,
    title: "مشاهده لیست اساتید",
  },
];
export const studentsMenu = [
  {
    type: "student",
    commandNumber: 1,
    title: "مشاهده لیست ترم ها",
  },
];

const Sidebar = ({ userType, setMenuRoute }) => {
  const dispatch = useDispatch();

  const handleUpdateItManagerLists = () => {
    const authData = {
      userType: "itmanager",
      page: 0,
      limit: 10,
    };
    dispatch(getStudentsList(authData)); // call api to get list of students
    dispatch(getManagersList(authData)); // call api to get list of managers
    dispatch(getProfessorList(authData)); // call api to get list of professors
  };

  const UpdateEduManagerLists = () => {
    const authData = {
      userType: "edumanager",
      page: 0,
      limit: 10,
    };
    dispatch(getStudentsList(authData)); // call api to get list of students
    dispatch(getProfessorList(authData)); // call api to get list of professors
  };
  return (
    <div className="w-full flex justify-center items-center bg-gray-700">
      <div className="w-full min-h-0 md:min-h-screen p-2 flex flex-row flex-wrap justify-center content-between items-center">
        {/* <div className="w-full h-auto">
                    <SidebarNavigation />
                </div> */}
        {/* <div className="w-full h-auto">
                    <SidebarAccount />
                </div> */}
        <div className="flex flex-col w-full">
          {userType === "itmanager" &&
            adminMenu?.map((item, i) => (
              <li
                className="list-none text-base font-serif my-2 cursor-pointer"
                key={i}
                onClick={() => (
                  setMenuRoute(item.commandNumber), handleUpdateItManagerLists()
                )}
              >
                {item.title}
              </li>
            ))}

          {userType === "student" &&
            studentsMenu?.map((item, i) => (
              <li
                className="list-none text-base font-serif my-2 cursor-pointer"
                key={i}
                onClick={() => setMenuRoute(item.commandNumber)}
              >
                {item.title}
              </li>
            ))}

          {userType === "edumanager" &&
            eduManagerMenu?.map((item, i) => (
              <li
                className="list-none text-base font-serif my-2 cursor-pointer"
                key={i}
                onClick={() => (
                  setMenuRoute(item.commandNumber), UpdateEduManagerLists()
                )}
              >
                {item.title}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
