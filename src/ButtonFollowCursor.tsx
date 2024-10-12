import { memo, ReactNode, useState } from "react";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
  coordsOn?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  activeScale?: boolean;
  className?: string;
  background?: string;
  foreground?: string;
  initialCoordinates?: { x: number; y: number } | undefined;
};

export const ButtonFollowCursor = memo(
  ({
    children,
    coordsOn,
    type,
    onClick,
    activeScale,
    className,
    background,
    foreground,
    initialCoordinates,
  }: Props) => {
    const [coords, setCoords] = useState({
      x: initialCoordinates?.x || 0,
      y: initialCoordinates?.y || 0,
    });

    const handleButtonClick = () => {
      const defaultCoordinates = { x: 0, y: 0 };
      setCoords(defaultCoordinates);

      if (onClick) {
        onClick();
      }
    };

    if (coordsOn) {
      return (
        <div
          className={clsx(className, background)}
          onMouseMove={(event) => {
            const buttonRect = event.currentTarget.getBoundingClientRect();
            setCoords({
              x: event.clientX - buttonRect.left - buttonRect.width / 2,
              y: event.clientY - buttonRect.top - buttonRect.height / 2,
            });
          }}
          onMouseLeave={() => {
            setCoords({
              x: initialCoordinates?.x || 0,
              y: initialCoordinates?.y || 0,
            });
          }}
        >
          <button
            type={type}
            className={clsx(
              "relative whitespace-nowrap w-full h-full py-2 px-7 rounded box-decoration-clone text-base font-semibold",
              activeScale && "active-scale",
              foreground || "bg-white text-black"
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
        className="text-black w-fit relative py-2 h-11 px-7 active:scale-[.93] rounded bg-white box-decoration-clone text-base font-semibold"
      >
        {children}
      </button>
    );
  }
);
