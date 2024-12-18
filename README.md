# Button Follow Cursor - React Component Library

**Button Follow Cursor** is a handy React component that creates an interactive button responding to cursor movement. It enhances user experience and adds dynamic elements to your interface.

## Installation

To use the component in your project, follow these steps:

1. Install the required dependencies:
   ```bash
   npm install clsx
   ```
2. Copy the `ButtonFollowCursor` component into your project or install the library if it’s published (e.g., via npm or GitHub).

## Usage

### Basic Example:

```tsx
import { ButtonFollowCursor } from "button-follow-cursor";

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
```

## Component Props

| Prop                  | Type                              | Description                                                                 | Default Value         |
|-----------------------|-----------------------------------|-----------------------------------------------------------------------------|-----------------------|
| `children`            | `ReactNode`                       | Text or elements displayed inside the button.                               | `undefined`           |
| `coordsOn`            | `boolean`                         | Enables cursor tracking.                                                    | `false`               |
| `type`                | `"button" \| "submit" \| "reset"` | Button's HTML type.                                                         | `"button"`            |
| `onClick`             | `() => void`                      | Callback triggered when the button is clicked.                              | `undefined`           |
| `activeScale`         | `boolean`                         | Enables a scaling effect when the button is clicked.                        | `false`               |
| `className`           | `string`                          | Additional CSS classes for the button container.                            | `""`                  |
| `background`          | `string`                          | CSS class for the button container's background.                            | `"bg-default"`        |
| `foreground`          | `string`                          | CSS class for the button's text and foreground.                             | `"text-black"`        |
| `initialCoordinates`  | `{ x: number; y: number }`        | Initial offset coordinates for the button.                                  | `{ x: 0, y: 0 }`      |

## Key Features

1. **Dynamic Cursor Interaction**: The button moves based on the user’s cursor position.
2. **Scaling Effect**: Adds a scaling effect when the button is clicked.
3. **Simple Configuration**: Easily customizable properties for appearance and behavior.

## Customization Example

```tsx
<ButtonFollowCursor
  coordsOn={true}
  activeScale={true}
  className="max-w-xs cursor-pointer rounded-lg h-12"
  background="bg-gradient-to-r from-purple-500 to-blue-500"
  foreground="text-white border-2 border-white"
  initialCoordinates={{ x: 50, y: 50 }}
  onClick={() => console.log("Button clicked!")}
>
  Custom Button
</ButtonFollowCursor>
```

## Styling Tips

- **Use TailwindCSS classes or your own CSS for customization.**
- **Add animations to enhance the user effect.**
- **Adjust `initialCoordinates` to create interesting effects.**

### CSS for Active Scaling (`active-scale`)

```css
.active-scale:active {
  transform: scale(0.95);
}
```

## Conclusion

`ButtonFollowCursor` is an excellent choice for creating interactive buttons with advanced UX. It integrates easily into projects, offers extensive customization options, and adds style to your interface.
