import { GiHeartburn } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex gap-2 text-2xl items-center">
        <GiHeartburn size="30" />
        <h1 className="font-medium">cupid.fm</h1>
      </div>
      <div className="mt-10">
        <Link
          to="/begin"
          className="px-6 py-3 font-semibold rounded-lg bg-pink-400/10 border-none
          hover:bg-pink-400/30 transition-all duration-75"
        >
          BEGIN
        </Link>
      </div>
    </div>
  )
}
