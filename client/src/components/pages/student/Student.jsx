import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Student = ({ menuRoute }) => {
  const navigate = useNavigate();
  const term = useSelector((state) => state.term);

  const handleSendTermPage = (id) => {
    navigate(`/student/term/${id}`);
  };

  return (
    <div className=" w-full h-full">
      <div className="w-full border-b-[1px] border-gray-400 px-3 py-5">
        مشاهده لیست ترم ها
      </div>
      <div className="py-2 px-4 min-h-[380px] ">
        {/* show students list */}
        {menuRoute === 1 &&
          term?.terms?.map((item) => (
            <div
              onClick={handleSendTermPage(item?.id)}
              className="w-[180px] h-[40px] bg-gray-200 rounded-md"
              key={item?.id}
            >
              ترم پاییز 1402
            </div>
          ))}
      </div>
      <p className="w-[100px] font-serif text-center mx-auto cursor-pointer">
        مشاهده بیشتر
      </p>
    </div>
  );
};

export default Student;
