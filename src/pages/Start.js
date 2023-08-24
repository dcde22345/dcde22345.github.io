import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="background1 vw-100 vh-100">
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <div className="bg-dark bg-opacity-50 p-5 border border-5 border-white mb-5">
          <h1 className="text-white text-center mb-0 display-1 fw-bold">
            《午餐零廚餘》
            <br />
            宣言
          </h1>
        </div>
        <Link className="btn btn-dark px-5" to="/Game1">
          <span className="display-4 fw-bold">開始製作</span>
        </Link>
      </div>
    </div>
  );
};

export default Start;
