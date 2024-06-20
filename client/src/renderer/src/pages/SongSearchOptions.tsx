import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'

export const SongSearchOptions = () => {
  const sendRequestToServer = async () => {
    const response = await fetch('http://localhost:3001/hello', {
      method: 'GET'
    })
    const body = await response.json()
    console.log(body)
  }
  return (
    <div className="page-container flex justify-center">
      <Link to="/begin" className="btn btn-sm btn-ghost absolute top-0 left-0">
        <FaLongArrowAltLeft /> Back
      </Link>
      <button className="btn" onClick={sendRequestToServer}>
        Send Request
      </button>
    </div>
  )
}
