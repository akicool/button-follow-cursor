import { memo, ReactNode, useState, useCallback } from "react";
import clsx from "clsx";

type Coordinates = { x: number; y: number };

type Props = {
  children?: ReactNode;
  coordsOn?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  activeScale?: boolean;
  className?: string;
  background?: string;
  foreground?: string;
  initialCoordinates?: Coordinates;
};

export const ButtonFollowCursor = memo(({
  children,
  coordsOn = false,
  type = "button",
  onClick,
  activeScale = false,
  className = "",
  background = "bg-default",
  foreground = "text-black",
  initialCoordinates = { x: 0, y: 0 },
}: Props) => {
  const [coords, setCoords] = useState<Coordinates>(initialCoordinates);

  const handleButtonClick = useCallback(() => {
    setCoords({ x: 0, y: 0 });
    onClick?.();
  }, [onClick]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!coordsOn) return;
      const buttonRect = event.currentTarget.getBoundingClientRect();
      setCoords({
        x: event.clientX - buttonRect.left - buttonRect.width / 2,
        y: event.clientY - buttonRect.top - buttonRect.height / 2,
      });
    },
    [coordsOn]
  );

  const handleMouseLeave = useCallback(() => {
    setCoords(initialCoordinates);
  }, [initialCoordinates]);

  return (
    <div
      className={clsx(className, coordsOn && background)}
      onMouseMove={coordsOn ? handleMouseMove : undefined}
      onMouseLeave={coordsOn ? handleMouseLeave : undefined}
    >
      <button
        type={type}
        className={clsx(
          "relative whitespace-nowrap w-full h-full py-2 px-7 rounded box-decoration-clone text-base font-semibold transition-transform duration-200 ease-out",
          activeScale && "active-scale",
          foreground
        )}
        onClick={handleButtonClick}
        style={{
          transform: coordsOn ? `translate(${coords.x / 5}px, ${coords.y / 5}px)` : undefined,
        }}
      >
        <div className="absolute left-0 top-0 z-10 grid h-full w-full place-items-center">
          {children}
        </div>
      </button>
    </div>
  );
});
