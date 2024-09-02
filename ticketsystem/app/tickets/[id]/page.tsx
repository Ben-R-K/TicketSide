import { GetTicketInfo } from "@/app/pages/api/DataBaseConnection"
import MenueBar from "@/app/MenueBar";

export default async function Page({ params }: { params: { slug: string } }) {
    //fetch ticket with id 

    const t = await GetTicketInfo(Number(params.id))

    console.log('Fetched Ticket:', t);

    if ('error' in t) {
        return <div className="text-red-500 text-center mt-10">Error: {t.error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Menu Bar */}
            <MenueBar />

            {/* Ticket Details */}
            <div className="flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full space-y-6">
                    <div className="bg-white shadow-lg rounded-lg p-10">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-5xl font-bold text-blue-800">{t.headline}</h1>
                            <span className={`inline-block px-4 py-2 rounded-full text-base font-semibold ${t.prioritylevel.prioritysymbol === 'High' ? 'bg-red-100 text-red-800' : t.prioritylevel.prioritysymbol === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                                {t.prioritylevel.prioritysymbol} Priority
                            </span>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
                            <p className="text-gray-700 p-6 bg-gray-50 border border-gray-200 rounded-lg">{t.description}</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-xl text-gray-700">
                                <span className="font-semibold text-gray-900">Department: </span>{t.department.department}
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className={`text-xl font-semibold ${t.open ? 'text-green-600' : 'text-red-600'}`}>
                                Status: {t.open ? "Open" : "Closed"}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-md text-gray-500">
                                Created at: {new Date(t.createdAt).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}