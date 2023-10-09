import { useState } from "react";

export const Button = ({ buttonText }) => {
  const [coords, setCoords] = useState({ x: -30, y: -30 });

  return (
    <div className="h-full w-full flex flex-col justify-center gap-12 items-center">
      {/* <h1 className="text-lime-300">
        {coords.x} {coords.y}
      </h1> */}
      <div className="h-[40%] max-w-xs w-full grid place-items-center bg-slate-50/20 rounded-2xl">
        <div
          className="bg-[#fd8e8e] rounded-3xl max-w-[15.625rem] w-full fixed"
          onMouseMove={(event) => {
            setCoords({
              x:
                event.clientX -
                (event.currentTarget.offsetLeft +
                  event.currentTarget.offsetWidth / 2),
              y:
                event.clientY -
                (event.currentTarget.offsetTop +
                  event.currentTarget.offsetHeight / 2),
            });
          }}
          onMouseLeave={() => {
            setCoords({
              x: -30,
              y: -30,
            });
          }}
        >
          <button
            className={`relative text-black py-3 px-7 hover:scale-[.96] border rounded-3xl bg-white box-decoration-clone w-full text-base font-semibold`}
            style={{
              top: coords.y / 5,
              left: coords.x / 5,
              transition: ".2s ease-out",
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
