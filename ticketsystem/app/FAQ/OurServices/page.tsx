import MenueBar from "@/app/MenueBar";

export default function OurServices() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Menu Bar */}
            <MenueBar />

            {/* Hero Section with Blue Background */}
            <div className="relative h-64 bg-blue-800 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Our Services</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
                <div className="text-lg text-gray-700 leading-relaxed space-y-12">
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Consulting Services</h2>
                        <p>
                            At The Company, our consulting services are designed to provide businesses and individuals with expert advice and strategic planning. 
                            Whether you're looking to optimize your operations, expand into new markets, or enhance your product offerings, 
                            our team of seasoned consultants will work closely with you to develop customized solutions that drive success. 
                            We pride ourselves on our ability to understand your unique challenges and deliver actionable insights that help you achieve your goals.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Product Development</h2>
                        <p>
                            Our product development services are at the forefront of innovation. We specialize in designing, developing, and launching products that meet 
                            the evolving demands of the market. From initial concept to final execution, our team handles every aspect of the development process, 
                            ensuring that your products are not only innovative but also practical and market-ready. Whether you're developing a new product from scratch or 
                            improving an existing one, we have the expertise and resources to bring your vision to life.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Customer Support</h2>
                        <p>
                            Providing exceptional customer support is one of our core values. We understand that the success of your business relies heavily on the satisfaction 
                            of your customers, which is why we offer dedicated customer support services to ensure their needs are met promptly and effectively. 
                            Our team of support professionals is trained to handle a wide range of customer inquiries, from technical support to general assistance, 
                            helping you maintain a positive relationship with your customers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Training and Workshops</h2>
                        <p>
                            Continuous learning and skill development are crucial for success in today’s fast-paced business environment. 
                            We offer a variety of training sessions and workshops designed to equip your team with the knowledge and skills they need to excel. 
                            Our programs cover a wide range of topics, including leadership development, technical training, and industry-specific best practices. 
                            Each session is tailored to meet the specific needs of your organization, ensuring that your team gains valuable insights and practical skills that can be applied immediately.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Digital Solutions</h2>
                        <p>
                            In today’s digital age, having a strong online presence is essential for business success. 
                            Our digital solutions services include website development, app development, and digital marketing strategies that are tailored to your business needs. 
                            We work with you to create digital experiences that engage your audience, drive conversions, and strengthen your brand. 
                            Whether you’re looking to launch a new website, develop a mobile app, or improve your online marketing efforts, 
                            we have the expertise to deliver results that exceed your expectations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
