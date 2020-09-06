import { useState, useLayoutEffect } from "react"

export default function Home() {
    const [scrolling, setScrolling] = useState(false)

    let throttleTimeout = null
    const handleScroll = () => {
        if (throttleTimeout === null) {
            throttleTimeout = setTimeout(() => {
                if (window.pageYOffset > 0) setScrolling(true)
                else setScrolling(false)
                throttleTimeout = null
            }, 50)
        }
    }

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <div className="relative bg-navy h-full subpixel-antialiased">
            <div
                className="z-0 absolute pointer-events-none bg-no-repeat bg-cover top-0 right-0 hidden lg:block"
                style={{ width: "40vw", height: "40vw", backgroundImage: "url(/radial.png)" }}
            ></div>
            <div className="z-10 relative">
                <header
                    id="header"
                    className={`${scrolling ? "scrolling" : ""} sticky top-0 z-20 bg-no-repeat bg-contain`}
                    style={{ backgroundImage: "url(/gradient-1.png)" }}
                >
                    <div className="container mx-auto px-8 py-6">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <a href="#" title="Live Message">
                                    <img src="/logo-light.png" alt="Live Message" className="w-48" />
                                </a>
                            </div>
                            <div className="hidden lg:block">
                                <nav>
                                    <div className="flex text-white">
                                        <a href="#" className="px-5 duration-100 transition-colors hover:text-gray-200">
                                            Features
                                        </a>
                                        <a href="#" className="px-5 duration-100 transition-colors hover:text-gray-200">
                                            Pricing
                                        </a>
                                        <a href="#" className="px-5 duration-100 transition-colors hover:text-gray-200">
                                            Partner with us
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md duration-100 transition-colors bg-gray-800 text-white hover:bg-gray-700"
                                >
                                    Create Account
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="arrow-right w-4 h-4">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container mx-auto px-8 pt-24 lg:pt-40 pb-32 lg:pb-64">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-10 xl:col-span-8">
                            <h2 className="font-display text-5xl text-white leading-tight mb-6">The fastest way to turn web visitors into paying customers</h2>
                            <p className="text-blue-200 text-lg mb-10 lg:pr-56">
                                Are you looking to increase sales by up to 60%, generate more leads by 300% or do you simply want to improve customer service?
                            </p>
                            <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 lg:pr-56">
                                <div className="flex-1">
                                    <input
                                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal"
                                        type="email"
                                        placeholder="joe@bloggs.com"
                                    />
                                </div>
                                <div>
                                    <button className="border border-blue-500 bg-blue-500 duration-100 transition-colors text-white py-2 px-4 rounded-md w-full lg:w-auto hover:border-blue-600 hover:bg-blue-600">
                                        Sign-up for early access
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-no-repeat bg-left-top bg-cover xl:bg-top" style={{ backgroundImage: "url(/gradient-2.png)" }}>
                    <div className="container mx-auto px-8 pb-16 lg:pb-24">
                        <div className="lg:grid lg:grid-cols-12">
                            <div className="lg:col-span-6 xl:col-span-5">
                                <span className="uppercase font-semibold tracking-widest text-blue-300 text-sm">Tools</span>
                                <h2 className="font-display text-4xl text-white leading-tight mb-6 mt-6">All-in-one customer communication platform</h2>
                                <p className="text-blue-200">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-8 ">
                        <div className="lg:grid lg:grid-cols-12">
                            <div className="lg:col-span-5 xl:col-span-4">
                                <div className="group flex gap-6 pb-12 lg:border-b border-white border-opacity-30 lg:pr-16 lg:mb-12 cursor-pointer">
                                    <div className="text-white">
                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-blue-200">
                                            <span className="font-semibold text-white">Live Chat. </span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                        </p>
                                    </div>
                                </div>

                                <div className="group flex gap-6 pb-12 lg:border-b border-white border-opacity-30 lg:pr-16 lg:mb-12 cursor-pointer">
                                    <div className="text-blue-300 group-hover:text-white">
                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-blue-200">
                                            <span className="font-semibold text-white">Instant Callbacks. </span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                        </p>
                                    </div>
                                </div>

                                <div className="group flex gap-6 pb-12 lg:border-b border-white border-opacity-30 lg:pr-16 lg:mb-12 cursor-pointer">
                                    <div className="text-blue-300 group-hover:text-white">
                                        <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-blue-200">
                                            <span className="font-semibold text-white">Automated Chatbots. </span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 xl:col-span-8">
                                <div className="relative border border-white border-opacity-30 rounded-xl p-2">
                                    <img src="/browser-window.png" alt="Browser example" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="container mx-auto px-8 pb-16">
                        <div className="lg:grid lg:grid-cols-12">
                            <div className="lg:col-span-5 xl:col-span-4">
                                <div className="pb-16 lg:pb-24">
                                    <span className="uppercase font-semibold tracking-widest text-gray-500 text-sm">Marketing</span>
                                    <h2 className="font-display text-4xl text-white leading-tight text-gray-800 mb-6 mt-6">
                                        Engage with your customers like never before
                                    </h2>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-7 xl:col-span-8">
                                <div className="relative border border-white border-opacity-30 rounded-xl p-2">
                                    <img src="/windows.png" alt="Browser example" className="w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 pt-12">
                            <div className="group flex gap-6 pb-12 lg:border-b border-white border-opacity-30 lg:pr-16 lg:mb-12 cursor-pointer">
                                <div className="text-gray-800">
                                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600">
                                        <span className="font-semibold text-gray-800">Instant Callbacks. </span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex gap-6 pb-12 lg:border-b border-white border-opacity-30 lg:pr-16 lg:mb-12 cursor-pointer">
                                <div className="text-gray-300 group-hover:text-gray-800">
                                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600">
                                        <span className="font-semibold text-gray-800">Automated Chatbots. </span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex gap-6 pb-12 lg:border-b border-white border-opacity-30 lg:pr-16 lg:mb-12 cursor-pointer">
                                <div className="text-gray-300 group-hover:text-gray-800">
                                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600">
                                        <span className="font-semibold text-gray-800">Live Chat. </span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus turpis, imperdiet vitae posuere dignissim.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="bg-white border-t border-gray-200 pt-24 pb-24 lg:pb-32 lg:pt-24">
                    <div className="container mx-auto px-8">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 lg:col-span-6">
                                <a href="#" title="Live Message">
                                    <img src="/logo-dark.png" alt="Live Message" className="w-48" />
                                </a>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-3 pt-12 lg:pt-0">
                                <h3 className="text-gray-800 font-bold mb-6">Products</h3>
                                <nav>
                                    <div className="flex flex-col gap-4 text-gray-600 text-white">
                                        <a href="#" className="duration-100 transition-colors hover:text-gray-500">
                                            Features
                                        </a>
                                        <a href="#" className="duration-100 transition-colors hover:text-gray-500">
                                            Pricing
                                        </a>
                                        <a href="#" className="duration-100 transition-colors hover:text-gray-500">
                                            Partner with us
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-3 pt-12 lg:pt-0">
                                <h3 className="text-gray-800 font-bold mb-6">Developers</h3>
                                <nav>
                                    <div className="flex flex-col gap-4 text-gray-600">
                                        <a href="#" className="duration-100 transition-colors hover:text-gray-500">
                                            Documentation
                                        </a>
                                        <a href="#" className="duration-100 transition-colors hover:text-gray-500">
                                            Releases
                                        </a>
                                        <a href="#" className="duration-100 transition-colors hover:text-gray-500">
                                            Status
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
