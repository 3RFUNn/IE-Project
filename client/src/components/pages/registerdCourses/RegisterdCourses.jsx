import React from "react";
import { useSelector } from "react-redux";
import user from "../../../assets/image/user.jpg";

const RegisterdCourses = () => {
  const course = useSelector((state) => state.course);
  return (
    <div className="w-full flex flex-col font-serif">
      <div className="flex flex-row-reverse items-center justify-between p-2 w-full">
        {/* downlaod excel file */}
        <div>
          <button className="bg-primary px-2 py-1 rounded-sm font-serif cursor-pointer">
            دانلود اکسل
          </button>
          <p>جدیدترین</p>
          <p>قدیمی ترین</p>
        </div>

        <form>
          <input
            className="w-[180px] py-1 px-2 font-serif rounded-sm bg-transparent border-primary border-[1px]"
            type="text"
            name="searchName"
            placeholder={`جست و جو بر اساس نام دانشجو`}
          />
        </form>
      </div>

      {/* result items */}
      <div className="py-2 px-4 min-h-[380px]">
        {/* show students list */}
        {course?.students?.map((item) => (
          <div
            className="flex flex-row items-center justify-between w-[200px] h-[50px] font-serif border-[1px] border-gray-300"
            key={item.id}
          >
            <img
              className="w-[40px] h-[40px] rounded-[50%] border-[1px] border-gray-300"
              alt={item?.name}
              src={user}
            />
            <p>{item?.name}</p>
            <div className="flex flex-row items-center">
              <button className="w-[50px] border-[1px] border-gray-300 bg-transparent">
                تایید
              </button>
              <button className="w-[50px] border-[1px] border-gray-300 bg-transparent">
                رد
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="w-[100px] font-serif text-center mx-auto cursor-pointer">
        مشاهده بیشتر
      </p>
    </div>
  );
};

export default RegisterdCourses;
