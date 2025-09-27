import React from "react";

function Card() {

  const data = ["ron","rose","jack","jill"];
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {data.map((item, index) => {
                return <h1>{item}</h1>
            })}
        </div>
    );
}
export default Card;