import { BrowserRouter, Route, Routes } from 'react-router'
import { Theme } from "@radix-ui/themes";
import ProductsPage from './features/products/ProductsPage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductPage from './features/products/ProductPage.tsx';
import { LoginPage } from './features/auth/LoginPage.tsx';

import './App.css'
import { CheckAuthProvider } from './features/shared/providers/CheckAuthProvider.tsx';

const queryClient = new QueryClient();
export const ArtisanApp = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Theme 
          panelBackground="translucent" 
          appearance="dark" 
          accentColor="blue"
        >
          <CheckAuthProvider>
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="products/new" element={<ProductPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </CheckAuthProvider>
        </Theme>
      </BrowserRouter>
  </QueryClientProvider>
  
  )
}
