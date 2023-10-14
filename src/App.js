import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { DashBoard } from './pages/DashBoard';

function App() {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900'>
        <Sidebar />
      </div>

      <main className='md:pl-72 bg-[#f5f6f8]'>
        <Navbar />
        <DashBoard />
      </main>

    </div>
  );
}

export default App;
