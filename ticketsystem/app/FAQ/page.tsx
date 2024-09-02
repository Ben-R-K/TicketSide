import MenueBar from "@/app/MenueBar";

export default function FAQ() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Menu Bar */}
            <MenueBar />

            {/* Hero Section with FAQ Title */}
            <div className="relative h-48 bg-blue-800 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">FAQ</h1>
            </div>

            {/* FAQ Links */}
            <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    <a className="flex justify-center" href="/FAQ/OurServices">
                        <h1 className="bg-blue-800 text-white p-5 rounded-lg font-bold text-xl sm:text-2xl text-center transition transform ease-in-out hover:scale-105 duration-300 hover:bg-blue-900">
                            What are our services?
                        </h1>
                    </a>
                    <a className="flex justify-center" href="/FAQ/OurHistory">
                        <h1 className="bg-blue-800 text-white p-5 rounded-lg font-bold text-xl sm:text-2xl text-center transition transform ease-in-out hover:scale-105 duration-300 hover:bg-blue-900">
                            Our history
                        </h1>
                    </a>
                    <a className="flex justify-center" href="/FAQ/WhoAreWe">
                        <h1 className="bg-blue-800 text-white p-5 rounded-lg font-bold text-xl sm:text-2xl text-center transition transform ease-in-out hover:scale-105 duration-300 hover:bg-blue-900">
                            Who are we?
                        </h1>
                    </a>
                    <a className="flex justify-center" href="/FAQ/OurPlans">
                        <h1 className="bg-blue-800 text-white p-5 rounded-lg font-bold text-xl sm:text-2xl text-center transition transform ease-in-out hover:scale-105 duration-300 hover:bg-blue-900">
                            What are our plans for the future?
                        </h1>
                    </a>
                </div>
            </div>
        </div>
    );
}
