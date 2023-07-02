import React, { useEffect, useState } from "react";
import UserCard from "../../card/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getStudentsList } from "../../../redux/actions/studentAction";
import { getManagersList } from "../../../redux/actions/managerAction";
import { getProfessorList } from "../../../redux/actions/professorAction";
import { extractTokenData } from "../../../redux/reducers/user-slice";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const Itmanager = ({ menuRoute }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const studentsData = useSelector((state) => state.student);
  const managersData = useSelector((state) => state.manager);
  const professorsData = useSelector((state) => state.professor);
  const user = useSelector((state) => state.user);

  const [file, setFile] = useState();
  const [managerName, setManagerName] = useState("");
  const [professorName, setProfessorName] = useState("");

  useEffect(() => {
    if (user.token) {
      dispatch(extractTokenData());
    }
  }, [dispatch, user.token]);

  const handleSearchProfessor = (e) => {
    e.preventDefault();

    const authData = {
      userType: user?.data?.userType,
      name: professorName,
    };
    dispatch(getProfessorList(authData));
  };

  const handleSearchManager = (e) => {
    e.preventDefault();

    const authData = {
      userType: user?.data?.userType,
      firstName: managerName,
    };
    dispatch(getManagersList(authData));
  };

  const handleClickAddBtn = () => {
    navigate("/admin/profile/");
  };

  useEffect(() => {
    if (studentsData.students.length) {
      toast.success("عملیات با موفقیت انجام شد", {
        duration: 2000,
      });
    }
  }, [studentsData]);

  return (
    <div className="w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full flex flex-row items-center justify-between h-[60px] px-3 border-b-[1px] ">
        {/* route address */}
        <p className="font-serif">
          {menuRoute === 1
            ? "مشاهده لیست دانشجویان"
            : menuRoute === 2
            ? "مشاهده لیست اساتید"
            : "مشاهده لیست مدیران"}
        </p>
        <button onClick={handleClickAddBtn} className="font-medium font-serif">
          {menuRoute === 1
            ? "+افزودن دانشجو"
            : menuRoute === 2
            ? "+افزودن استاد"
            : "+افزودن مدیر"}
        </button>
      </div>

      {/* content of lists */}
      <section>
        {/* list topbar actions */}
        <div className="mb-2 pt-2">
          {menuRoute === 2 ? (
            <div className="flex flex-row-reverse items-center justify-between p-2 w-full">
              {/* upload excel file */}
              <label
                htmlFor="file"
                className="bg-primary px-2 py-1 rounded-sm font-serif cursor-pointer"
              >
                آپلود اکسل
                <input className="hidden" id="file" type="file" name="file" />
              </label>
              {/* search by name */}

              <form onSubmit={handleSearchProfessor}>
                <input
                  className="w-[180px] py-1 px-2 font-serif rounded-sm bg-transparent border-primary border-[1px]"
                  type="text"
                  name="searchName"
                  placeholder={`جست و جو بر اساس استاد`}
                  value={professorName}
                  onChange={(e) => setProfessorName(e.target.value)}
                />
              </form>
            </div>
          ) : menuRoute === 3 ? (
            <div className="flex flex-row-reverse items-center justify-between p-2 w-full">
              {/* upload excel file */}
              <label
                htmlFor="file"
                className="bg-primary px-2 py-1 rounded-sm font-serif cursor-pointer"
              >
                آپلود اکسل
                <input
                  className="hidden"
                  id="file"
                  type="file"
                  name="file"
                  accept=".excel"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              {/* search by name */}
              <form onSubmit={handleSearchManager}>
                <input
                  className="w-[180px] py-1 px-2 font-serif rounded-sm bg-transparent border-primary border-[1px]"
                  type="text"
                  name="searchName"
                  placeholder={`جست و جو بر اساس نام مدیر`}
                  value={managerName}
                  onChange={(e) => setManagerName(e.target.value)}
                />
              </form>
            </div>
          ) : null}
        </div>
        {/* result items */}
        <div className="py-2 px-4 min-h-[380px] flex flex-row flex-wrap items-start">
          {/* show students list */}
          {menuRoute === 1 &&
            studentsData?.students?.map((item) => (
              <UserCard key={item?.id} type="student" cardData={item} />
            ))}

          {/* professor list */}
          {menuRoute === 2 &&
            professorsData?.professors?.map((item) => (
              <UserCard type="professor" key={item?.id} cardData={item} />
            ))}

          {/* manager list */}
          {menuRoute === 3 &&
            managersData?.managers?.map((item) => (
              <UserCard type="manager" key={item?.id} cardData={item} />
            ))}
        </div>
        <p className="w-[100px] font-serif text-center mx-auto cursor-pointer">
          مشاهده بیشتر
        </p>
      </section>
    </div>
  );
};

export default Itmanager;
