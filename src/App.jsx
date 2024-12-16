import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/layout/Header';
import TabContent from './components/TabContent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <TabContent />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;