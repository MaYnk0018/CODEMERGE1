import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('token');
        navigate('/signin')
    }
  return (
    <div className="flex h-screen">
     <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      <div className="p-4 text-2xl font-semibold">
        Dashboard
      </div>
      <nav className="mt-10 flex-1">
        <Link to="/new-project" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          New Project
        </Link>
        <Link to="/join" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Join
        </Link>
        <Link to="/all-projects" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          All Projects
        </Link>
        <Link to="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Profile
        </Link>
        <div onClick={logout} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Logout
        </div>
      </nav>
    </div>
      <div className="flex-1 p-10 bg-gray-100 overflow-auto">
       
      </div>
    </div>
  )
}

export default Dashboard