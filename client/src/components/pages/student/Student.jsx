import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Student = ({ menuRoute }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const term = useSelector((state) => state.term);
  const user = useSelector((state) => state.user);

  // const handleSendTermPage = (id) => {
  //   navigate(`/student/term/${id}`);
  // };

  const handleGetTerms = () => {
    const authData = {
      id: user?.data?.id,
    };
    console.log("click menu");
  };

  const handleSendToTermPage = (id) => {
    navigate(`term/${id}`);
  };

  return (
    <div className=" w-full h-full">
      <div
        onClick={handleGetTerms}
        className="w-full border-b-[1px] border-gray-400 px-3 py-5"
      >
        مشاهده لیست ترم ها
      </div>
      <div className="py-2 px-4 min-h-[380px] flex flex-row flex-wrap ">
        {/* show students list */}
        {menuRoute === 1 &&
          term?.terms?.map((item) => (
            <div
              className="w-[250px] h-[50px] m-2 bg-gray-200 text-black rounded-md flex items-center px-3 cursor-pointer"
              key={item?._id}
              onClick={() => handleSendToTermPage(item?._id)}
            >
              {item?.name}
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
