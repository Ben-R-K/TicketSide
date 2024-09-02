import MenueBar from "@/app/MenueBar";

export default function OurPlans() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Menu Bar */}
            <MenueBar />

            {/* Hero Section with Blue Background */}
            <div className="relative h-64 bg-blue-800 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Our Plans</h1>
            </div>

            {/* Content Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Our Plans Content */}
                    <div className="text-xl text-gray-700 leading-relaxed space-y-6">
                        <p>
                            At The Company, we are constantly looking ahead and planning for growth and innovation.
                            Our vision for the future includes expanding into new service areas, reaching clients on a global scale, and continually improving our offerings.
                        </p>
                        <p>
                            We believe that in order to stay ahead in a rapidly changing world, it's essential to be proactive, agile, and forward-thinking.
                            This belief drives every decision we make, from the services we offer to the partnerships we form.
                        </p>
                        <div className="mt-5 space-y-4">
                            <div>
                                <p className="text-2xl font-semibold text-gray-900">Expanding Service Offerings:</p> 
                                <span>
                                    We are committed to broadening our range of services to meet the evolving needs of our clients.
                                    This includes developing new consulting specialties, enhancing our digital solutions, and introducing advanced training programs.
                                    By staying at the forefront of industry trends, we aim to provide comprehensive solutions that address the unique challenges faced by our clients.
                                </span>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-900">Global Expansion:</p> 
                                <span>
                                    In addition to broadening our services, we have set our sights on expanding our presence globally.
                                    We plan to establish offices in strategic locations around the world to better serve our international clients.
                                    By building a global network, we will be able to provide localized support and services, ensuring that our clients receive the same high-quality experience no matter where they are located.
                                </span>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-900">Investing in Technology and Innovation:</p> 
                                <span>
                                    As part of our future plans, we will continue to invest in cutting-edge technology and innovation.
                                    This commitment will enable us to develop new tools and platforms that enhance our service delivery, improve efficiency, and provide greater value to our clients.
                                </span>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-900">Building Strategic Partnerships:</p> 
                                <span>
                                    We believe in the power of collaboration, and we plan to form strategic partnerships with industry leaders and innovators.
                                    These partnerships will allow us to leverage additional expertise and resources, further enhancing our ability to deliver exceptional results.
                                </span>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-900">Sustainability Initiatives:</p> 
                                <span>
                                    We recognize the importance of sustainability in today’s business environment.
                                    Our future plans include implementing sustainable practices across all areas of our business, from reducing our carbon footprint to ensuring that our products and services contribute positively to the environment.
                                </span>
                            </div>
                            <div>
                                <p className="text-2xl font-semibold text-gray-900">Enhancing Client Relationships:</p> 
                                <span>
                                    Our clients are at the core of everything we do. Moving forward, we plan to strengthen our client relationships by offering personalized services, enhancing our communication channels, and providing more opportunities for feedback.
                                    Our goal is to build lasting partnerships that drive mutual success.
                                </span>
                            </div>
                        </div>
                        <div className="mt-5">
                            Our goal is to become a global leader in our field, known for our comprehensive service offerings, innovative solutions, and commitment to client success.
                            As we grow and evolve, we will continue to put our clients first, ensuring that they remain at the core of everything we do.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
