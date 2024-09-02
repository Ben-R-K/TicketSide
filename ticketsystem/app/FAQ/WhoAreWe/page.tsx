import MenueBar from "@/app/MenueBar";

export default function WhoWeAre() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Menu Bar */}
            <MenueBar />

            {/* Hero Section with Blue Background */}
            <div className="relative h-64 bg-blue-800 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Who We Are</h1>
            </div>

            {/* Content Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Who We Are Content */}
                    <div className="text-xl text-gray-700 leading-relaxed space-y-6">
                        <p>
                            We are The Company, a dedicated team of professionals driven by a shared passion for excellence. 
                            Since our founding, we have been committed to delivering top-notch solutions and services to our clients worldwide. 
                            Our team consists of industry experts in consulting, technology, customer support, and training, all working together to help our clients achieve their goals.
                        </p>
                        <p>
                            Over the years, we have grown from a small group of specialists into a global organization, recognized for our innovation, reliability, 
                            and commitment to customer satisfaction. Our success is rooted in our ability to adapt to the changing needs of our clients and the marketplace, 
                            while staying true to our core values.
                        </p>
                        <p>
                            Our mission is to empower businesses and individuals by providing them with the tools, strategies, and support they need to succeed. 
                            We believe in building long-term relationships with our clients, based on trust, transparency, and mutual respect. 
                            By understanding the unique challenges faced by each client, we tailor our services to meet their specific needs, ensuring that we deliver results that make a difference.
                        </p>
                        <div className="mt-5 space-y-4">
                            <p className="text-2xl font-semibold text-gray-900">Our core values include:</p>
                            <div>
                                <p className="font-bold inline">Integrity:</p> 
                                <span> We believe in honesty and transparency in all our dealings. We hold ourselves to the highest ethical standards, ensuring that our clients can trust us to act in their best interests at all times.</span>
                            </div>
                            <div>
                                <p className="font-bold inline">Customer Focus:</p> 
                                <span> Our clients are at the heart of everything we do. We strive to exceed their expectations by delivering outstanding results and providing exceptional customer service. We listen to our clients' needs and work closely with them to achieve their goals.</span>
                            </div>
                            <div>
                                <p className="font-bold inline">Innovation:</p> 
                                <span> We are committed to staying ahead of industry trends and using the latest technologies to provide cutting-edge solutions. Our team is constantly exploring new ideas and approaches, ensuring that we remain at the forefront of our field.</span>
                            </div>
                            <div>
                                <p className="font-bold inline">Excellence:</p> 
                                <span> We take pride in our work and aim for the highest standards of quality in every project we undertake. Our attention to detail, dedication to improvement, and commitment to excellence drive us to deliver the best possible outcomes for our clients.</span>
                            </div>
                            <div>
                                <p className="font-bold inline">Collaboration:</p> 
                                <span> We believe that the best results come from working together. Our team collaborates closely with each other and with our clients to ensure that we fully understand their needs and deliver solutions that are not only effective but also aligned with their vision.</span>
                            </div>
                            <div>
                                <p className="font-bold inline">Sustainability:</p> 
                                <span> We are dedicated to making a positive impact on the world. We incorporate sustainable practices into our operations and strive to create solutions that benefit both our clients and the environment.</span>
                            </div>
                        </div>
                        <div className="mt-5">
                            At The Company, we are not just a service provider; we are a partner in your success. 
                            We are committed to building lasting relationships with our clients and contributing to their long-term growth and prosperity. 
                            As we look to the future, we remain focused on delivering innovative solutions, exceptional service, and unparalleled value.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
