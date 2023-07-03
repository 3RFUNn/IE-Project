import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TermCard from "../../card/TermCard";
import UserCard from "../../card/UserCard";
import { useNavigate } from "react-router-dom";
import { getProfessorList } from "../../../redux/actions/professorAction";
import { Toaster, toast } from "react-hot-toast";

const EduManager = ({ menuRoute }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const managersData = useSelector((state) => state.manager);
  const professorsData = useSelector((state) => state.professor);
  const studentsData = useSelector((state) => state.student);
  const term = useSelector((state) => state.term);
  const user = useSelector((state) => state.user);

  const [name, setName] = useState("");

  const handleClickAddBtn = () => {
    if (menuRoute === 1) {
      navigate("/edumanager/term");
    }
  };

  const handleSearchProfessor = (e) => {
    e.preventDefault();

    const authData = {
      userType: user?.data?.userType,
      name: name,
    };
    dispatch(getProfessorList(authData));
  };

  useEffect(() => {
    if (studentsData?.students?.length) {
      toast.success("عملیات با موفقیت انجام شد", {
        duration: 2000,
      });
    }
  }, [studentsData]);

  return (
    <div className="w-full">
      <div className="w-full flex flex-row items-center justify-between h-[60px] px-3 border-b-[1px] ">
        {/* route address */}
        <p className="font-serif">
          {menuRoute === 2
            ? "مشاهده لیست دانشجویان"
            : menuRoute === 3
            ? "مشاهده لیست اساتید"
            : "مشاهده لیست ترم ها"}
        </p>
        <button onClick={handleClickAddBtn} className="font-medium font-serif">
          {menuRoute === 2
            ? "+افزودن دانشجو"
            : menuRoute === 3
            ? "+افزودن استاد"
            : "+افزودن ترم"}
        </button>
      </div>

      {/* content of lists */}
      <section>
        {/* list topbar actions */}
        <div className="mb-2 pt-2">
          {menuRoute === 3 ? (
            <div className="flex flex-row-reverse items-center justify-between p-2 w-full">
              {/* upload excel file */}
              <button className="bg-primary px-2 py-1 rounded-sm font-serif cursor-pointer">
                دانلود اکسل
              </button>
              {/* search by name */}

              <form onSubmit={handleSearchProfessor}>
                <input
                  className="w-[180px] py-1 px-2 font-serif rounded-sm bg-transparent border-primary border-[1px]"
                  type="text"
                  name="searchName"
                  placeholder={`جست و جو بر اساس استاد`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </form>
            </div>
          ) : menuRoute === 3 ? (
            <div className="flex flex-row-reverse items-center justify-between p-2 w-full">
              {/* upload excel file */}
              <button className="bg-primary px-2 py-1 rounded-sm font-serif cursor-pointer">
                دانلود اکسل
              </button>
              {/* search by name */}
            </div>
          ) : null}
        </div>

        {/* result items */}
        <div className="py-2 px-4 min-h-[380px] flex flex-row flex-wrap">
          {menuRoute === 1 &&
            term?.terms?.map((item) => (
              <TermCard key={item?.id} type="term" cardData={item} />
            ))}

          {menuRoute === 2 &&
            professorsData?.professors?.map((item) => (
              <UserCard type="professor" key={item?.id} cardData={item} />
            ))}

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

export default EduManager;
