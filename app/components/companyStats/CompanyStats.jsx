import StatCard from "./StatCard";
import ScrollAnimation from "../common/scrollAnimation/ScrollAnimation";


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
        <div className="w-full min-h-screen bg-[#B5C0C9]">
            <div className="grid grid-cols-5  px-10 py-28">
                <div>
                    <ScrollAnimation
                        initialPosition="200%"
                        finalPosition="0%"
                        initialOpacity={1}
                        finalOpacity={1}
                        duration={1}
                        delay={0.8}
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
                        delay={0.9}
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
                        delay={0.8}
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
                        delay={0.9}
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
                        delay={0.8}
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