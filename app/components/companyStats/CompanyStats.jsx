import StatCard from "./StatCard";
import ScrollAnimation from "../common/scrollAnimation/ScrollAnimation";
import video from "@/public/stat-bg-video.mp4";


const CompanyStats = () => {
    const stats = [
        {
            _id: 1,
            title: "Total Awards",
            numbers: "7"
        },
        {
            _id: 2,
            title: "Total Awards",
            numbers: "4+"
        },
        {
            _id: 3,
            title: "Total Awards",
            numbers: "3"
        },
        {
            _id: 4,
            title: "Total Awards",
            numbers: "40+"
        },
        {
            _id: 5,
            title: "Total Awards",
            numbers: "250+"
        },
    ]
    const stat = {
        _id: 1,
        title: "Total Awards",
        numbers: "7"
    }

    return (
        <div className="w-full min-h-screen bg-[#B5C0C9] relative">
            <div className="absolute w-full h-screen mix-blend-color-dodge opacity-80 translate-z-0 flex justify-center items-center">
                <video
                    className="w-1/2 rounded-full h-full object-cover z-0"
                    src={video}
                    autoPlay
                    muted
                    loop
                />
            </div>
            <div className="grid grid-cols-5 px-10 py-28">
                <div>
                    <ScrollAnimation
                        initialPosition="200%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={1.2}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard stat={stat} index={1}></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="100%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={1.3}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard stat={stat} index={2}></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="0%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={1.3}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard stat={stat} index={3}></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="-100%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={1.3}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard stat={stat} index={4}></StatCard>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation
                        initialPosition="-200%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={1.2}
                        position="x"
                        once={false}
                        toggleActions={"play reverse play reverse"}
                    >
                        <StatCard stat={stat} index={5}></StatCard>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default CompanyStats;