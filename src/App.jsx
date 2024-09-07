import { ButtonFollowCursor } from "./Button";

function App() {
  return (
    <div className="h-screen w-full grid place-items-center">
      <ButtonFollowCursor coordsOn={true} className="max-w-sm">
        Button
      </ButtonFollowCursor>
    </div>
  );
}

export default App;
