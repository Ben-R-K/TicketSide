
import Link from "next/link"

export default function MenueBar(){
    return <div className="flex bg-cyan-400 justify-around py-2 font-bold">
    <a className="hover:bg-blue-500 rounded p-2" href="/">OpenTickets</a>
    <a className="hover:bg-blue-500 rounded p-2" href="/">ClosedTickets</a>
    <a className="hover:bg-blue-500 rounded p-2" href="/CreateTicket">CreateTicket</a>
    <a className="hover:bg-blue-500 rounded p-2" href="/FAQ">FAQ</a> 
    <a className="hover:bg-blue-500 rounded p-2" href="/SLA">SLA</a> 
</div>
}