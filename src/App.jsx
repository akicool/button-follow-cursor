import { ButtonFollowCursor } from "./Button";

function App() {
  return (
    <div className="h-screen w-full grid place-items-center">
      <ButtonFollowCursor
        coordsOn={true}
        activeScale={true}
        className="max-w-sm cursor-pointer rounded h-11 w-full"
        background="bg-blue-500"
        foreground="bg-black border-4"
        initialCoordinates={{ x: -30, y: -30 }}
      >
        Button
      </ButtonFollowCursor>
    </div>
  );
}

export default App;
