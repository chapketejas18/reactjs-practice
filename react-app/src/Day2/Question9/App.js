import { ThemeProvider } from './ThemeProvider';
import ThemedComponent from './ThemedComponent';
import './styles.css';

const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default App;
