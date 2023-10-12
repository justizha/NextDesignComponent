import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="px-4 lg:pt-28 lg:pb-24 pt-32 pb-28 border-b border-gray-600 md:flex md:justify-between ">
            <div className="px-4 lg:px-4 z-10 py-4 md:w-1/2 flex flex-col">
                <h1 className="font-black lg:text-6xl md:text-4xl text-[44px] tracking-tight lg:mb-7 mb-8">
                    NexT Component
                </h1>
                <p className="text-md md:text-base text-start lg:text-lg text-sm font-normal text-gray-400 mt-8">
                    Speed up your website development with ready-to-use components, which are not only customizable but also completely free, making the whole process faster and more convenient.
                </p>
                <div>
                    <Button>Components</Button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mx-auto">
                {/* Absolute divs */}
                <div className="bg-gray-500 bg-opacity-50 md:w-40 w-full rounded h-40 "></div>
                <div className="bg-gray-500 bg-opacity-50 md:w-40 w-full rounded h-40 "></div>
                <div className="bg-gray-500 bg-opacity-50 md:w-40 w-full rounded h-40 "></div>
                <div className="bg-gray-500 bg-opacity-50 md:w-40 w-full rounded h-40"></div>
            </div>


        </section>
    );
}
