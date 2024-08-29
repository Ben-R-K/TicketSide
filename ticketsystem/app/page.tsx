import { GetAcounts } from "./pages/api/DataBaseConnection";

export default async function Home(){
    
    const acounts = await GetAcounts();
    return(
        <div className="mx-[200]">
            <ul className="mt-2">
            {acounts.map((acount)=>(
                <li key={acount.id}>
                    <a href="/OpenTickets">
                        <h1>{acount.acount_name}</h1>
                        <p>{acount.department.department}</p>
                    </a>
                </li>
            ))}
        </ul>
        </div>
  );
}