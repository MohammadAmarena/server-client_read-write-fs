import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
)
