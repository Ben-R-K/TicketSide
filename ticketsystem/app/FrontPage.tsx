"use client"
import MenueBar from "./MenueBar";
export default function FrontPage(){
    return(
        <div className="grid">
            <MenueBar/>
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