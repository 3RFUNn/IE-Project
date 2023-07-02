import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../card/CourseCard";
import { useNavigate } from "react-router-dom";

const PreRigesterCourses = ({ userType }) => {
  const navigate = useNavigate();
  const course = useSelector((state) => state.course);

  const handleSendToAddCoursePage = () => {
    navigate("/edumanager/course");
  };

  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col font-serif text-lg bg-gray-300">
      <div className="flex flex-row items-center justify-between p-4 border-b-[1px] border-gray-600">
        <p>دروس پیش ثبت نامی ترم 1402</p>
        {userType !== "student" && (
          <button onClick={handleSendToAddCoursePage}>+افزودن درس</button>
        )}
      </div>

      <div className="flex flex-row-reverse items-center justify-between px-5 py-4 w-full">
        {/* downlaod excel file */}
        {userType !== "student" && (
          <div className="flex flex-row-reverse">
            <button className="bg-primary px-2 py-1 rounded-sm font-serif cursor-pointer">
              دانلود اکسل
            </button>
            <p className="mx-4">بیشترین تعداد ثبت نامی</p>
            <p className="mx-4">کمترین تعداد ثبت نامی</p>
          </div>
        )}

        <form>
          <input
            className="w-[200px] py-1 px-2 font-serif rounded-sm bg-transparent border-primary border-[1px]"
            type="text"
            name="searchName"
            placeholder={`جست و جو بر اساس درس`}
          />
        </form>
      </div>

      {/* result items */}
      <div className="py-2 px-4 min-h-[380px]">
        {/* show students list */}
        {course?.courses?.map((item) => (
          <CourseCard key={item?.id} type="term" cardData={item} />
        ))}
      </div>
      <p className="w-[100px] font-serif text-center mx-auto cursor-pointer">
        مشاهده بیشتر
      </p>
    </div>
  );
};

export default PreRigesterCourses;
