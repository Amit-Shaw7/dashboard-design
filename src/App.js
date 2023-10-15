import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { DashBoard } from './pages/DashBoard';

function App() {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full lg:flex lg:w-60 xl:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900'>
        <Sidebar />
      </div>

      <main className='lg:pl-60 xl:pl-72 bg-[#f5f6f8]'>
        <Navbar />
        <DashBoard />
      </main>

    </div>
  );
}

export default App;
