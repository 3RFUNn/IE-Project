import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewManager, modifyManager } from "../../../redux/actions/managerAction";

const EditManager = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    id: "",
    govermantId: "",
    department: "",
    field: "",
    entryYear: "",
    level: "",
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleEditManager = () => {
    dispatch(modifyManager(formData));
  };
  const handleNewManager = () => {
    dispatch(createNewManager(formData));
  };
  return (
    <div className="w-full flex flex-col items-center font-serif">
      <h1 className="text-center text-lg mb-5">
        ثبت/تغییر اطلاعات مدیر آموزشی
      </h1>
      <form className="w-full px-5 flex flex-col md:flex-row md:justify-around items-center md:items-start">
        <div className="flex flex-col items-center">
          {/* firstname input */}
          <label
            htmlFor="firstname"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            نام
            <input
              id="firstname"
              name="firstname"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            />
          </label>
          {/* lastname input */}
          <label
            htmlFor="lastname"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            نام خانوادگی
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            />
          </label>
          {/* student number input */}
          <label
            htmlFor="id"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            شماره پرسنلی
            <input
              id="id"
              name="id"
              type="text"
              required
              value={formData.id}
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            />
          </label>
          {/* goverment id input */}
          <label
            htmlFor="govermentId"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            شماره ملی
            <input
              id="govermentId"
              name="govermentId"
              type="text"
              required
              value={formData.govermantId}
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            />
          </label>
        </div>

        <div className="flex flex-col items-center">
          {/* department input */}
          <label
            htmlFor="department"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            دانشکده
            <select
              name="department"
              id="department"
              value={formData.department}
              required
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            >
              <option value="IT">IT</option>
            </select>
          </label>

          {/* field input */}
          <label
            htmlFor="field"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            رشته
            <select
              name="field"
              id="field"
              value={formData.field}
              required
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            >
              <option value="IT">IT</option>
            </select>
          </label>

          {/* entryy year input */}
          <label
            htmlFor="entryYear"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            سال ورود
            <input
              id="entryYear"
              name="entryYear"
              type="text"
              required
              value={formData.entryYear}
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            />
          </label>

          {/* TA input */}
          <label
            htmlFor="level"
            className="flex flex-col min-w-[215px] min-h-[30px] mb-3"
          >
            سطح
            <input
              id="level"
              name="level"
              type="text"
              required
              value={formData.level}
              onChange={handleChangeForm}
              className="border-[1px] border-gray-300 py-1 px-2 rounded-sm"
            />
          </label>
        </div>
      </form>
      <button
        onClick={handleNewManager}
        className="w-[150px] h-[45px] text-lg bg-primary rounded-sm my-4"
      >
        ثبت
      </button>
      <button
        onClick={handleEditManager}
        className="w-[150px] h-[45px] text-lg bg-primary rounded-sm my-4"
      >
        تغییر
      </button>
    </div>
  );
};

export default EditManager;
