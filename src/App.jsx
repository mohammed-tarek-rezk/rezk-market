import { HelmetProvider } from "react-helmet-async"
import { Footer, Header, MainRoutes } from "./components"
import { Provider } from "react-redux"
import { persistor, store } from "./store/store"
import { PersistGate } from 'redux-persist/integration/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  return  (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <div className="app">
            <Header />
            <MainRoutes />
            <Footer />
          </div>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
