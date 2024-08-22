"use client"

export default function FrontPage(){
    return(
        <div className="grid">
            <div className="flex justify-around mt-2 font-bold">
                <a className="hover:bg-blue-500 rounded p-2 " href="">OpenTickets</a>
                <a className="hover:bg-blue-500 rounded p-2" href="">ClosedTickets</a>
                <a className="hover:bg-blue-500 rounded p-2" href="">CreateTicket</a>
                <a className="hover:bg-blue-500 rounded p-2" href="">SLA</a> 
            </div>
            <div className="flex">
                <ul className="mt-2">
               
                </ul>
            </div>
            <div className="flex flex-col place-self-end rounded mt-10 mr-8 pr-5 pl-5 pt-5 pb-10 bg-blue-500">
                <label className="self-center text-xl mb-4">Navn</label>
                <label className="self-center text-xl">Afdeling</label>
            </div>
        </div>
    );
}