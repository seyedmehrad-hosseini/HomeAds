import Map from "./components/Map/Map";
import LocationPickerExample from "./components/picker copy/Picker";
import MyPicker from "./components/picker/Picker";
import AppRoutes from "./routes/routes";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          {/* <Map /> */}
          {/* <MyPicker /> */}
          <AppRoutes />
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
