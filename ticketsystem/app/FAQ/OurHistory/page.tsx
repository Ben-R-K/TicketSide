import MenueBar from "@/app/MenueBar";

export default function OurHistory() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Menu Bar */}
            <MenueBar />

            {/* Hero Section with Blue Background */}
            <div className="relative h-64 bg-blue-800 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Our History</h1>
            </div>

            {/* Content Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Return Link */}
                    <div className="mb-8">
                        <a href="/FAQ" className="text-blue-600 hover:underline">← Return</a>
                    </div>

                    {/* History Content */}
                    <div className="text-xl text-gray-700 leading-relaxed space-y-6">
                        <p>
                            The Company was founded in 1922 with a mission to provide high-quality services and solutions to clients worldwide.
                            Starting as a small firm with a handful of dedicated professionals, we have grown exponentially over the years.
                            Our commitment to excellence, innovation, and customer satisfaction has allowed us to expand our services and reach new markets.
                        </p>
                        <p>
                            Throughout our journey, we have successfully completed numerous projects, developed long-lasting relationships with our clients,
                            and built a reputation for reliability and professionalism. Today, we are proud to be a leader in our industry,
                            recognized for our quality service and innovative solutions.
                        </p>
                        <p>
                            In the early years, our focus was primarily on providing specialized consulting services to local businesses.
                            As the demand for our expertise grew, we expanded our offerings and entered new markets, both domestically and internationally.
                            The 1960s marked a period of significant growth as we opened our first international office and began to build a global presence.
                        </p>
                        <p>
                            By the 1980s, we had established ourselves as a trusted partner to some of the world's largest corporations, providing
                            tailored solutions that helped them navigate complex challenges and achieve their strategic goals. Our commitment to
                            staying at the forefront of industry trends and technological advancements has been a driving force behind our continued success.
                        </p>
                        <p>
                            Today, The Company operates in multiple countries, offering a wide range of services that include consulting, product development,
                            customer support, training, and digital solutions. Our team of experts is dedicated to delivering exceptional results for our clients,
                            and we continue to innovate and adapt in an ever-changing global market.
                        </p>
                        <p>
                            As we look to the future, we remain committed to our founding principles of excellence, innovation, and customer satisfaction.
                            We are excited to continue our journey, expanding our reach and impact while staying true to the values that have defined our success
                            for over a century.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
