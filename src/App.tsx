import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="w-[95%] mx-auto">
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
