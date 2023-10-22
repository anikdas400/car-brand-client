import { Link } from "react-router-dom";


const BrandCollect = () => {
    return (
        <div className="">

            <h2 className="text-4xl font-bold italic mt-7 mb-5">Brand <span className="text-yellow-600 underline">Collection</span></h2>
            <div className="flex flex-wrap gap-3 ml-40 mb-5 ">

            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/n8Ymhzm/bmw-logo.jpg" alt="" />
            <Link to='/mycart'><h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">BMW</h2></Link>
            </div>

            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/PNFZgQj/ford-logo.jpg" alt="" />
            <Link to='/mycart'><h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Ford</h2></Link>
            </div>

            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/nPwwbWN/toyota-logo.jpg" alt="" />            
            <Link to='/mycart'><h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Toyota</h2></Link>
            </div>

            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/xsCBnJf/mercedes-logo.jpg" alt="" />           
            <Link to='/mycart'><h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Mercedes</h2></Link>
            </div>

            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/fdCC9bG/tesla-logo.jpg" alt="" />           
            <Link to='/mycart'><h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Tesla</h2></Link>
            </div>

            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/Krz9kHQ/honda-logo.jpg" alt="" />           
            <Link to='/mycart'><h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Honda</h2></Link>
            </div>

            </div>

        </div>
    );
};

export default BrandCollect;