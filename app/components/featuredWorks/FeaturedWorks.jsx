import image1 from '@/public/feature_1.webp';
import ScrollAnimation from '../common/scrollAnimation/ScrollAnimation';
import SingleWork from './SingleWork';

const FeaturedWorks = () => {

    const projects = [
        {
            _id: 1,
            title: "Cellares",
            description: "Corporate Website",
            image: image1
        },
        {
            _id: 2,
            title: "Lumana",
            description: "Corporate Website",
            image: image1
        },
        {
            _id: 3,
            title: "Ambi Robotics",
            description: "Corporate Website",
            image: image1
        },
        {
            _id: 4,
            title: "Optimal Dynamics",
            description: "Corporate Website",
            image: image1
        },
    ];

    return (
        <div className='max-w-screen-xl mx-auto py-52'>
            {/* Title */}
            <div className="mb-28 overflow-hidden">
                <ScrollAnimation
                    initialPosition="100%"
                    finalPosition="0%"
                    duration={1}
                    delay={0}
                    position="y"
                >
                    <div>
                        <h2 className='text-6xl font-bold'>Featured Work</h2>
                        <p className='mt-8 text-gray-600 text-lg'>Explore some of our latest website projects.</p>
                    </div>
                </ScrollAnimation>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-36'>
                {projects.map((project, index) => (
                   <SingleWork
                    key={index}
                    index={index}
                    project={project}
                    ></SingleWork>
                ))}
            </div>
        </div>
    );
};

export default FeaturedWorks;
