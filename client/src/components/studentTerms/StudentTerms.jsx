import React, { useState } from "react";
import PreRigesterCourses from "../preRigesterCourses/PreRigesterCourses";

const StudentTerms = () => {
  const [menuRoute, setMenuRoute] = useState(0);

  return (
    <div className=" w-[100dvw] h-[100dvh] bg-gray-100">
      {menuRoute === 0 && (
        <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-gray-400 px-3 py-5">
          <p>ترم پاییز 1402</p>

          <button>مشاهده اطلاعات ترم</button>
        </div>
      )}

      {menuRoute === 0 && (
        <div className=" w-full flex flex-col items-center">
          <div className="flex flex-row mx-5">
            <div
              onClick={() => setMenuRoute(1)}
              className="bg-gray-700 text-white h-[100px] w-[190px] m-3 cursor-pointer flex items-center justify-center text-center rounded-2xl"
            >
              مشاهده پیش ثبت نام ها
            </div>
            <div
              onClick={() => setMenuRoute(2)}
              className="bg-gray-700 text-white h-[100px] w-[190px] m-3 cursor-pointer flex items-center justify-center text-center rounded-2xl"
            >
              مشاهده لیست دروس ارایه شده برای پیش ثبت نام
            </div>
          </div>

          <div className="flex flex-row mx-5">
            <div
              onClick={() => setMenuRoute(3)}
              className="bg-gray-700 text-white h-[100px] w-[190px] m-3 cursor-pointer flex items-center justify-center text-center rounded-2xl"
            >
              مشاهده درس های ثبت نام شده
            </div>
            <div
              onClick={() => setMenuRoute(4)}
              className="bg-gray-700 text-white h-[100px] w-[190px] m-3 cursor-pointer flex items-center justify-center text-center rounded-2xl"
            >
              مشاهده لیست دروس ارایه شده برای ثبت نام
            </div>
          </div>
        </div>
      )}

      {/* show content */}
      {menuRoute === 1 && <PreRigesterCourses userType="student" />}
      {menuRoute === 2 && <PreRigesterCourses userType="student" />}
      {menuRoute === 3 && <PreRigesterCourses userType="student" />}
      {menuRoute === 4 && <PreRigesterCourses userType="student" />}
    </div>
  );
};

export default StudentTerms;
