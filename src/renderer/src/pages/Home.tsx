import { GiPiercedHeart } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { spotify_logo } from '@renderer/assets'

export const Home = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center relative">
      <div className="flex text-3xl items-center">
        <GiPiercedHeart size="35" className="text-pink-300/90" />
        <h1 className="font-medium">cupid.fm</h1>
      </div>

      <div className="mt-10">
        <Link
          to="/begin"
          id="begin-button"
          className="btn px-6 bg-lime-200/10 border-none text-white
          hover:bg-lime-200/30 transition-all duration-75"
        >
          BEGIN
        </Link>
      </div>

      <div className="absolute bottom-5 right-5">
        <img src={spotify_logo} className="min-w-[21px] w-28" />
      </div>
    </div>
  )
}
