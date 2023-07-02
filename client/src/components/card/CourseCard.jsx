import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../redux/actions/courseAction";

const CourseCard = ({ cardData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSendToFullDataCourse = () => {
    navigate(`/edumanager/course/${cardData?.id}`);
  };
  const handleDeleteCourse = () => {
    dispatch(deleteCourse(cardData?.id));
  };
  return (
    <div className="w-[220px] h-[50px] rounded-md flex flex-row items-center justify-between font-serif">
      <div className="flex flex-col items-center justify-start">
        <h3>{cardData?.course}</h3>
        <p>{cardData?.professor}</p>
      </div>

      <div>پیش ثبت نام {cardData?.users}</div>

      <div className="flex flex-row items-center justify-center">
        <button
          onClick={handleSendToFullDataCourse}
          className="border-[1px] border-gray-300"
        >
          اطلاعات کامل
        </button>
        <button
          onClick={handleDeleteCourse}
          className="border-[1px] border-gray-300"
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
