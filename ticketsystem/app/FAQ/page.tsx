
export default function FAQ(){
    return(
        <div className="grid grid-cols-5 mt-20 mb-5">
            <a className="flex justify-center" href="/FAQ/OurServices">
                <h1 className="bg-cyan-400 p-3 rounded-md font-bold text-2xl transition ease-in-out hover:scale-110 duration-300">What are our services?</h1>
            </a>
            <a className="flex justify-center" href="/FAQ/OurHistory">
                <h1 className="bg-cyan-400 p-3 rounded-md font-bold text-2xl transition ease-in-out hover:scale-110 duration-300">Our history?</h1>
            </a>
            <a className="flex justify-center" href="/FAQ/WhoAreWe">
                <h1 className="bg-cyan-400 p-3 rounded-md font-bold text-2xl transition ease-in-out hover:scale-110 duration-300">Who are we?</h1>
            </a>
            <a className="flex justify-center" href="/FAQ/OurPlans">
                <h1 className="bg-cyan-400 p-3 rounded-md font-bold text-2xl transition ease-in-out hover:scale-110 duration-300">What are our plans for the future?</h1>
            </a>
        </div>
    );
}