import { Link } from "react-router-dom";

const SellerCard = ({ title, image }) => {
  return (
    <Link to="/women">
      <div className=" justify-between rounded">
        <div className="sm:h-[200px] sm:w-[157px] h-[193px] w-[150px] bg-slate-300">
          <img src={image} className="mb-3" alt="" />
          <div className="flex items-center justify-center pt-2 pb-2 bg-white text-sm font-medium font-sans	">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SellerCard;
