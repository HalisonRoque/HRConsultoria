import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import { Suspense } from 'react';
import AppRoutes from './pages/routers';
import { Container } from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Container>
          <Suspense fallback={<h1>Carregando...</h1>}>
            <AppRoutes />
          </Suspense>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
