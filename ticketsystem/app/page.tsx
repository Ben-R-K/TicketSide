import { GetAcounts } from "./pages/api/DataBaseConnection";

export default async function Home(){
    
    const acounts = await GetAcounts();
    return(
        <div className="mx-[200]">
 
        </div>
  );
}