import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'

export const Begin = () => {
  return (
    <div className="page-container relative flex flex-col justify-center items-center">
      <Link to="/" className="btn btn-sm btn-ghost absolute top-0 left-0">
        <FaLongArrowAltLeft /> Home
      </Link>

      <h1 className="bouncing-text text-center text-2xl font-semibold drop-shadow-lg">
        What would you like to do?
      </h1>

      <div className="flex gap-3 mt-10">
        <div
          className="card action-card bg-neutral-600/10
          hover:cursor-pointer transition-all duration-75"
        >
          <div className="card-body">
            <div className="card-title">Option 1</div>
          </div>
        </div>

        <div
          className="card action-card bg-neutral-600/10
          hover:cursor-pointer transition-all duration-75"
        >
          <div className="card-body">
            <div className="card-title">Option 2</div>
          </div>
        </div>
      </div>
    </div>
  )
}
