
import { motion } from 'framer-motion'
import Section from '../ui/Section';
const StaggeredGrid = () => {
    // 1. Define the Parent Container Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // This creates the "one after the other" delay
            },
        },
    };

    // 2. Define the Individual Image Variants
    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50 // Starts 50px to the left   
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier for smooth deceleration
            },
        },
    };











    const textSpan = "flex-shrink-0 flex flex-col items-start justify-end px-6 pb-6 lg:px-8 lg:pb-10 w-48 md:w-56 lg:w-60 rounded-2xl bg-accent-orange text-white font-bold";

    const row1 = [
        { src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80", span: "col-span-2 row-span-1" },
        { text: '14 Days', subText: 'Website Launch', span: textSpan },
        { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", span: "col-span-1 row-span-1" },
        { text: '48 hrs', subText: 'Video Turnaround', span: textSpan },
        { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80", span: "col-span-2 row-span-1" },
        { text: '4.8x ROAS', subText: 'Ad Campaigns That Work', span: textSpan },
    ];
    const row2 = [
        { src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80", span: "col-span-1 row-span-1" },
        { text: '1,000+', subText: 'Conversations Generated', span: textSpan },
        { src: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=600&q=80", span: "col-span-1 row-span-1" },
        { text: '3x Traffic', subText: '98 Performance Score', span: textSpan },
        { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", span: "col-span-2 row-span-1" },
        { text: '100%', subText: 'Custom. No Templates.', span: textSpan },
    ];
    // { src: "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "col-span-1 row-span-1" },
    // { src: "https://plus.unsplash.com/premium_photo-1661963063875-7f131e02bf75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "col-span-2 row-span-1" },
    // ... add the rest of your image objects here


    return (
        <Section variant="darkSecondary" padding="lg" id="staggeredGrid" className="relative overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transform-gpu will-change-transform"
            >
                <source src="/assets/Video/sky-optimized.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Premium gradient overlay fading from secondary-blue to transparent at 30% */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, #2A629A 2%, rgba(42, 98, 154, 0) 70%)' }}
            />

            <motion.div
                className="relative flex flex-col gap-4 lg:gap-8 max-w-[100%] mx-auto z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Dedicated marquee container sitting on top of the video (z-10) with the mask applied */}
                <div className="relative z-10 w-full flex flex-col gap-4 lg:gap-8 [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)]">
                    {/* Top Row moving Left */}
                    <motion.div className="transform-gpu">
                        <MarqueeRow images={row1} speed={25} />
                    </motion.div>

                    {/* Bottom Row moving Right (reverse) */}
                    <motion.div className="transform-gpu">
                        <MarqueeRow images={row2} speed={30} reverse={true} />
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
};

const MarqueeRow = ({ images, speed, reverse }) => {
    // Double the images for a seamless loop
    const doubledImages = [...images, ...images, ...images];
    // Child defines the specific reveal (clipPath)


    // Note: Removed the 1.8s delay so staggerChildren can take over
    const finalStepContent = {
        hidden: {
            opacity: 0,
            clipPath: 'inset(100% 0% 0% 0%)',
        },
        visible: {
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            transition: {
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
            }
        }
    };


    // Parent controls the overall reveal and the stagger timing
    const finalStepVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // This will now orchestrate the children
                staggerChildren: 0.1,
                duration: 0.5,
                ease: [0.04, 0, 0.2, 1]
            }
        }
    };



    return (
        <motion.div
            className="flex whitespace-nowrap"
        >
            <motion.div
                className="flex gap-4 lg:gap-6 transform-gpu will-change-transform"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                variants={finalStepVariants}
            >
                {doubledImages.map((img, index) => (
                    img.src && (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 w-[250px] h-[200px] md:w-[320px] md:h-[280px] lg:w-[400px] lg:h-[350px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg"
                            variants={finalStepContent}
                        >
                            <motion.img
                                src={img.src}
                                style={{ transformOrigin: "bottom" }}
                                className="w-full h-full object-cover "
                                alt="Academy Showcase"
                            />
                        </motion.div>
                    )
                    ||
                    <motion.div
                        key={index}
                        className={`${img.span} `}
                        variants={finalStepContent}
                    >
                        <div className=' flex flex-col justify-center items-start'>
                            <p className='text-[1.5rem] lg:text-[2rem] text-white text-wrap '>{img.text}</p>
                            <p className='text-sm lg:text-md font-light text-white text-wrap'>{img.subText}</p>
                        </div>
                    </motion.div>

                ))}
            </motion.div>
        </motion.div>

    );
};

export default StaggeredGrid