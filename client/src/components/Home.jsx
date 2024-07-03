import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div> <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-bold">Logo</div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
        <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About Us</Link>
        <Link to="/signup" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Sign Up</Link>
        <Link to="/signin" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Sign In</Link>
      </div>
    </div>
  </nav></div>
  )
}

export default Home