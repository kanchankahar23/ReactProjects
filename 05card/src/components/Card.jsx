import React from "react";

function Card({text,color}) {

  const data = ["ron","rose","jack","jill"];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {data.map((item, index) => {
                return <h1>{item}</h1>
            })}
            <button className={`px-3 py-1 ${color} text-white  rounded-full`}>{text}</button>
        </div>
    );
}
export default Card;