import { Provider } from 'react-redux';
import Layout from '../components/Layout/Layout';
import store from '../store/store';
import GlobalStyle from '../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
