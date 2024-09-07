import { useState } from "react";
import clsx from "clsx";

export const ButtonFollowCursor = ({
  children,
  coordsOn,
  secondary,
  onClick,
  maxWidth,
  type,
  className,
}) => {
  const [coords, setCoords] = useState({ x: -30, y: -30 });

  const handleButtonClick = () => {
    const buttonCoords = { x: 0, y: 0 };
    setCoords(buttonCoords);

    if (onClick) {
      onClick();
    }
  };

  if (coordsOn) {
    return (
      <div
        className={clsx(
          "bg-red-500 rounded h-11 min-w-[11.25rem] w-full",
          className
        )}
        onMouseMove={(event) => {
          const buttonRect = event.currentTarget.getBoundingClientRect();
          setCoords({
            x: event.clientX - buttonRect.left - buttonRect.width / 2,
            y: event.clientY - buttonRect.top - buttonRect.height / 2,
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
          type={type}
          className={clsx(
            "relative whitespace-nowrap h-full text-black py-2 px-7 hover:scale-[.96] active:scale-100 rounded box-decoration-clone w-full text-base font-semibold",
            secondary
              ? "border-solid border-2 border-heavyWhite bg-black text-white"
              : "bg-white"
          )}
          onClick={handleButtonClick}
          style={{
            transition: ".2s ease-out",
            transform: `translate(${coords.x / 5}px, ${coords.y / 5}px`,
          }}
        >
          <div className="absolute left-0 top-0 z-10 grid h-full w-full place-items-center">
            {children}
          </div>
        </button>
      </div>
    );
  }

  return (
    <button
      type={type}
      className={clsx(
        "text-black relative py-2 h-11 px-7 hover:scale-[.96] rounded bg-white box-decoration-clone w-full overflow-hidden text-base font-semibold",
        maxWidth || "min-w-[11.25rem]",
        secondary &&
          "border-solid border-2 border-heavyWhite bg-black text-white"
      )}
      onClick={handleButtonClick}
    >
      <div className="absolute left-0 top-0 z-10 grid h-full w-full place-items-center">
        {children}
      </div>
    </button>
  );
};
