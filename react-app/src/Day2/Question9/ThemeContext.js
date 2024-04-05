import { ThemeProvider } from "./ThemeProvider";
import ThemedComponent from "./ThemedComponent";

export const ThemedContext = () => {
  return (
    <>
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
    </>
  );
}
