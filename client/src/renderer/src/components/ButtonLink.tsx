import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export const ButtonLink = ({ className, children, to, ...props }) => {
  return (
    <Link to={to} className={twMerge('btn', className)} {...props}>
      {children}
    </Link>
  )
}
