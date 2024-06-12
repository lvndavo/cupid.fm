import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { GiLoveSong } from 'react-icons/gi'
import { GiAudioCassette } from 'react-icons/gi'

export const Begin = () => {
  return (
    <div className="page-container relative flex flex-col justify-center items-center">
      <Link to="/" className="btn btn-sm btn-ghost absolute top-0 left-0">
        <FaLongArrowAltLeft /> Home
      </Link>

      <h1 className="bouncing-text text-center text-2xl font-semibold drop-shadow-lg">
        What are you looking for?
      </h1>

      <div className="grid grid-cols-2 gap-5 mt-10 px-3">
        <div className="card action-card w-fit">
          <div className="card-body text-center">
            <span className="self-center mb-3">
              <GiLoveSong size="35" className="icon" />
            </span>
            <h2 className="card-title self-center">New Songs</h2>
            <p>based on artists, genres, or tracks you already love</p>
          </div>
        </div>

        <div className="card action-card w-fit">
          <div className="card-body text-center">
            <span className="self-center mb-3">
              <GiAudioCassette size="35" className="icon" />
            </span>
            <h2 className="card-title self-center">Curated Playlist</h2>
            <p>based on artists, genres, or tracks you already love</p>
          </div>
        </div>
      </div>
    </div>
  )
}
