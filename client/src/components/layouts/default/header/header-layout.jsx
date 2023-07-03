import { useDispatch } from "react-redux";
import user from "../../../../assets/image/user.jpg";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../../../redux/actions/register/LoginAction";

const DefaultHeaderLayout = ({ userType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(Logout());
    navigate("/login");
  };
  return (
    <header className="w-full h-14 bg-gray-400 flex justify-center content-center items-center">
      <div className="w-full h-full flex flex-row justify-between items-center px-8">
        <div className="flex flex-row items-center">
          {userType === "student" && (
            <img
              alt={"name"}
              src={user}
              className="w-[50px] h-[50px] border-[1px] border-black rounded-[50%]"
            />
          )}
          <h1 className="px-5 font-serif font-bold text-lg md:text-xl">
            {userType}
          </h1>
        </div>

        <button
          onClick={handleLogout}
          className="w-[50px] h-[50px] rounded-md text-lg md:text-xl font-medium font-serif"
        >
          خروج
        </button>
      </div>
    </header>
  );
};

export default DefaultHeaderLayout;
