import './App.css'
import Sidebar from './components/layouts/Sidebar'

function App() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <h1 className="text-5xl font-bold text-blue-100">
        Clinical Sanctuary
      </h1>
    </div>
  )
}

export default App
