import "./stat.css";

const StatCard = ({ stat, index }) => {

    return (
        <div className={`stat ${index !== 5 && "mr-7"}`}>
            <div className="group bg-[#FFF] hover:text-white hover:bg-black hover:scale-[0.97] duration-700  transition-all ease-in-out">
                <div className="h-[280px] p-8 flex flex-col justify-between">
                    <h4 className="font-medium ">00{index + 1}</h4>
                    <h3 className="text-2xl font-semibold">{stat?.title}</h3>
                </div>
                <div className="px-8 py-6 border-t border-[#ECECEC]">
                    <h2 className=" font-semibold text-6xl">{stat?.numbers}</h2>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
