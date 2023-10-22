

const BrandCollect = () => {
    return (
        <div className="">
            <h2 className="text-4xl font-bold italic mt-4 mb-5">Brand <span className="text-yellow-600 underline">Collection</span></h2>
           
            <div className="flex flex-wrap gap-3 ml-40 mb-5 ">
{/*  md:grid-cols-3 sm:grid-cols-2 gap-2  bg-base-100  ml-12 */}
            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/n8Ymhzm/bmw-logo.jpg" alt="" />
            <h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">BMW</h2>
            </div>
            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/PNFZgQj/ford-logo.jpg" alt="" />
            <h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Ford</h2>
            </div>
            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/nPwwbWN/toyota-logo.jpg" alt="" />
            <h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Toyota</h2>
            </div>
            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/xsCBnJf/mercedes-logo.jpg" alt="" />
            <h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Mercedes</h2>
            </div>
            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/fdCC9bG/tesla-logo.jpg" alt="" />
            <h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Tesla</h2>
            </div>
            <div className="relative">
            <img className="h-72 w-72 rounded-lg" src="https://i.ibb.co/Krz9kHQ/honda-logo.jpg" alt="" />
            <h2 className="text-2xl text-sky-600 italic font-bold absolute bottom-10 left-10">Honda</h2>
            </div>

            </div>

        </div>
    );
};

export default BrandCollect;