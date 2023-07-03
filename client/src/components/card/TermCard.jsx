import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTerm } from "../../redux/actions/termAction";

const TermCard = ({ cardData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteTerm = () => {
    dispatch(deleteTerm());
  };
  const handleSendToEditTermPage = () => {
    navigate(`/edumanager/term/${cardData?.id}`);
  };
  return (
    <div className="w-[300px] h-[50px] flex flex-row m-2 items-center justify-between font-serif border-[1px] border-gray-300 px-2 rounded-md">
      <p className="">{cardData?.name}</p>
      <div>
        <button
          onClick={handleSendToEditTermPage}
          className="bg-gray-400 text-black w-[55px] rounded-sm"
        >
          ویرایش
        </button>
        <button
          onClick={handleDeleteTerm}
          className="bg-black text-white w-[55px] rounded-sm mr-2"
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default TermCard;
