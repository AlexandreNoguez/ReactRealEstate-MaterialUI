/* eslint-disable react/react-in-jsx-scope */
import { AppRoutes } from './routes';
import { SideMenu } from './shared/components/SideMenu';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';
import { DarkTheme } from './shared/themes';



function App() {

  return (
    <AppThemeProvider theme={DarkTheme}>
      <DrawerProvider isDrawerOpen={true}>
        <SideMenu>
          <AppRoutes />
        </SideMenu>
      </DrawerProvider >
    </AppThemeProvider>
  )
}

export default App;
