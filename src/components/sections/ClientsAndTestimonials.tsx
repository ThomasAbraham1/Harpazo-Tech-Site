import { AnimatePresence, motion, Variants } from "framer-motion"
import Divider from "../ui/Divider"
import { Heading, Text } from "../ui/Typography";
import { useEffect, useRef, useState } from "react";
import Section from "../ui/Section";

interface brandContent {
    name: string,
    brandName: string,
    image: string;
    brandLogo?: string;
    rating: number;
    review: string;
    myNoteTitle: string;
    myNoteBody: string;
}

export default function ClientsAndTestimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    // The Parent handles the staggering
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    // Specialized divider animation
    const dividerVariants: Variants = {
        hidden: (custom) => ({
            scaleX: custom?.axis === 'y' ? 1 : 0,
            scaleY: custom?.axis === 'y' ? 0 : 1,
            originX: custom?.axis === 'y' ? 0.5 : 0,
            originY: 1,
        }),
        visible: (custom) => ({
            scaleX: 1,
            scaleY: 1,
            originX: custom?.axis === 'y' ? 0.5 : 0,
            originY: 1,
            transition: { type: 'spring', stiffness: 70, damping: 15 }
        })
    };

    const staggerDynamic: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1, y: 0, transition: { duration: 0.5, delay: custom * 0.1, ease: 'easeOut' }
        }),
        exit: (custom: number) => ({
            opacity: 0, y: -20, transition: { duration: 0.3, delay: custom * 0.05, ease: 'easeIn' }
        })
    };

    const content: brandContent[] = [
        {
            name: "Jun Aoki ",
            brandName: "Aoki Works",
            image: "/assets/Jun.webp",
            brandLogo: '/assets/brandLogos/Aoki Works.webp',
            rating: 5,
            review: "Working with Harpazo Tech on my website was a smooth and positive experience.\nTheir team understood the vision behind the brand, maintained high professionalism, and delivered clean, well-structured work within a reasonable timeline.\nThey were responsive to feedback and proactive with suggestions, which made the final outcome both functional and aligned with what I had in mind.",
            myNoteTitle: "Client Feedback for Harpazo Tech Projects: Jun's Website - A Calm, Artistic Haven",
            myNoteBody: "Jun's website is a masterclass in understated elegance. By day, Aoki Works is a calm, meditative retreat for deep-sea divers, but by night",
        },
        {
            name: "John Harrigan",
            brandName: "Harrigan Academy",
            image: "/assets/John.webp",
            brandLogo: '/assets/brandLogos/Harrigan Academy.webp',
            rating: 5,
            review: "Transitioning our curriculum into a custom digital space required a robust, user-friendly platform, and Harpazo Tech delivered exactly that.\nTheir attention to the student journey and deep understanding of full-stack architecture made the Academy's launch a massive success.\nThey don't just write code; they engineer comprehensive solutions. I highly recommend them for complex, data-heavy builds.",
            myNoteTitle: "Client Feedback for Harpazo Tech Projects: Harrigan Academy - Where Structure Meets Elegance",
            myNoteBody: "Harrigan Academy required a delicate balance between complex data architecture and an intuitive, premium user interface. We focused on stripping away digital clutter, resulting in an immersive, distraction-free environment that genuinely elevates the e-learning experience.",
        },
        {
            name: "Amanpreet",
            brandName: "Tryfecta Management",
            image: "/assets/Tryfecta.webp",
            rating: 5,
            brandLogo: '/assets/brandLogos/Tryfecta Management.webp',
            review: "Partnering with Harpazo Tech was a pivotal step for our firm's growth. We needed a digital presence that communicated authority, efficiency, and trust.\nTheir team engineered a sleek, highly functional corporate site that streamlined our client intake process while looking incredibly sophisticated.\nTheir professionalism, strategic thinking, and flawless execution set them apart from anyone else we've worked with.",
            myNoteTitle: "Client Feedback for Harpazo Tech Projects: Tryfecta Management - The Architecture of Trust",
            myNoteBody: "For Tryfecta Management, the goal was to exude quiet authority and a subtle, dark luxury aesthetic. We implemented a refined, monochromatic UI paired with seamless backend integrations, proving that high-level corporate websites can be both exceptionally powerful and beautiful.",
        },
    ]

    // Auto-rotation — desktop only
    useEffect(() => {
        if (isHovered) return
        const timer = setInterval(() => {
            if (window.innerWidth < 1024) return
            setActiveIndex((prev) => (prev === content.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(timer)
    }, [isHovered, content.length])



    const prev = () => setActiveIndex((p) => (p === 0 ? content.length - 1 : p - 1))
    const next = () => setActiveIndex((p) => (p === content.length - 1 ? 0 : p + 1))

    return (
        <Section id="testimonials" ref={sectionRef} className="relative bg-[radial-gradient(circle_at_top_left,_#2A629A_10%,_#003285_90%)] w-full">
            {/* Bounded Sticky Arrows — they stick to the screen but only within this section */}
            <div className="absolute inset-0 z-50 pointer-events-none lg:hidden flex flex-col justify-end pb-8">
                <div className="sticky bottom-6 flex justify-between px-2 w-full">
                    <button
                        onClick={prev}
                        className="pointer-events-auto bg-primary-blue/90 backdrop-blur-md p-3 rounded-full border border-white/20 text-white shadow-2xl active:scale-95 transition-transform"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={next}
                        className="pointer-events-auto bg-primary-blue/90 backdrop-blur-md p-3 rounded-full border border-white/20 text-white shadow-2xl active:scale-95 transition-transform"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>
            </div>

            {/* Section: top padding, NO bottom padding — card bleeds to edge */}
            <div ref={sectionRef} className="px-4 pt-8 lg:pt-12 pb-0">

                <motion.div
                    className="flex flex-col lg:flex-row justify-center items-center lg:items-center bg-primary-blue w-full max-w-7xl mx-auto text-white rounded-2xl p-8 lg:pb-18 pb-15"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* LEFT: Image + stats */}
                    <motion.div className="grid grid-cols-2 items-center w-full lg:w-1/2  lg:-translate-y-0">
                        <div className="col-span-2 justify-self-center translate-y-20 min-h-[420px]">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    custom={0}
                                    key={activeIndex}
                                    variants={staggerDynamic}
                                    initial='hidden'
                                    animate='visible'
                                    exit='exit'
                                    src={content[activeIndex].image}
                                    className="max-w-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)] object-cover"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Below picture */}
                        <div className="flex flex-col justify-center items-center w-full h-full col-span-2 gap-4">
                            <div className="min-h-[72px] flex items-center w-full">
                                <AnimatePresence mode="wait">
                                    <motion.div custom={1} key={activeIndex} variants={staggerDynamic} initial='hidden' animate='visible' exit='exit' className="flex flex-row justify-between items-center w-full">
                                        <Heading level={1} className="text-6xl font-semibold text-white/80">
                                            {content[activeIndex].rating}.0
                                        </Heading>
                                        <Heading level={5} className="text-xl text-white/80 tracking-widest">
                                            ★ ★ ★ ★ ★
                                        </Heading>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <motion.div variants={dividerVariants} custom={{ axis: 'x' }} className="w-full">
                                <Divider className="border-gray-200/70 -translate-y-0 col-span-2 h-0"></Divider>
                            </motion.div>
                            <div className=" flex flex-col justify-start w-full gap-2">
                                <AnimatePresence mode="wait">
                                    <motion.div custom={2} key={activeIndex} variants={staggerDynamic} initial='hidden' animate='visible' exit='exit'>
                                        <Heading level={4} className="text-lg font-medium text-white/80 min-h-[110px]">
                                            {content[activeIndex].myNoteTitle}
                                        </Heading>
                                    </motion.div>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.div custom={3} key={activeIndex} variants={staggerDynamic} initial='hidden' animate='visible' exit='exit'>
                                        <Text className="text-sm font-light text-white/80 min-h-[120px]">
                                            {content[activeIndex].myNoteBody}
                                        </Text>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vertical divider (desktop) / Horizontal (mobile) */}
                    <motion.div
                        variants={dividerVariants}
                        custom={{ axis: 'y' }}
                        className="hidden lg:block w-[1px] self-stretch bg-gray-200/70 mx-8 flex-shrink-0"
                    />
                    <motion.div
                        variants={dividerVariants}
                        custom={{ axis: 'x' }}
                        className="block lg:hidden h-[1px] w-full bg-gray-200/70 my-8 flex-shrink-0"
                    />

                    {/* RIGHT: testimonial text */}
                    <motion.div layout className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8">
                        <Heading level={4} className="text-white/50 text-start text-3xl font-semibold w-full">
                            CLIENT STORIES
                        </Heading>
                        <motion.div className="flex flex-col justify-center items-center gap-6">
                            <div className="flex items-center">
                                <Heading level={1} className="text-white text-start text-5xl font-semibold w-full tracking-normal">
                                    Hear What Our Clients Have to Say
                                </Heading>
                            </div>
                            <motion.div variants={dividerVariants} custom={{ axis: 'x' }} className="w-full">
                                <Divider className="border-gray-200/70 -translate-y-0 col-span-2 h-0"></Divider>
                            </motion.div>
                            <div className="flex items-center">
                                <AnimatePresence mode="wait">
                                    <motion.div className="min-h-[160px] flex items-center" custom={4} layout key={activeIndex} variants={staggerDynamic} initial="hidden" animate='visible' exit='exit'>
                                        <Text className="text-sm font-light text-white/80 tracking-normal leading-relaxed ">
                                            {content[activeIndex].review}
                                        </Text>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Brand icons */}
                            <motion.div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
                                <AnimatePresence mode="wait">
                                    <motion.div custom={5} key={activeIndex} variants={staggerDynamic} initial='hidden' animate='visible' exit='exit' className="w-full flex flex-row justify-start items-center gap-4">
                                        <div className="w-20 h-20 bg-white rounded-full overflow-hidden flex-shrink-0 border-2">
                                            <motion.img src={content[activeIndex].brandLogo} className="object-cover" />
                                        </div>
                                        <Heading level={6} className="text-white text-start text-5xl font-semibold w-full tracking-normal">
                                            {content[activeIndex].brandName}
                                        </Heading>
                                    </motion.div>
                                </AnimatePresence>
                                <motion.div className="w-full flex flex-row justify-end items-center -space-x-2">
                                    {content.map((item, index) => (
                                        <motion.button
                                            key={item.brandName}
                                            onClick={() => setActiveIndex(index)}
                                            className={`w-14 h-14 border-1 rounded-full overflow-hidden flex-shrink-0 ${index == 1 ? "bg-[#904BA2]" : "bg-white"} p-2 ${activeIndex === index ? "border-accent-orange" : "border-white"}`}
                                        >
                                            <motion.img src={item.brandLogo} className=""></motion.img>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </motion.div>

            </div>
        </Section>
    )
}
