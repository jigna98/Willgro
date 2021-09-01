/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useLayout} from '../core'
import { toAbsoluteUrl} from '../../helpers'

const Footer: FC = () => {
  const {classes} = useLayout()
  return (
    <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
      {/* begin::Container */}
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        
        {/* begin::Copyright */}
        <div className='text-dark order-2 order-md-1'>
          <img
              alt='Logo'
              className='h-50px logo'
              src={toAbsoluteUrl('/images/logo-2.svg')}
            /><br></br><br></br>
          <span className='text-muted fw-bold me-2'>Copyright &copy; &nbsp;{new Date().getFullYear()} </span>
          <a href='#' className='text-gray-800 text-hover-primary'>
            Villgro. All Rights Reserved
          </a>
        </div>
        {/* end::Copyright */}

        {/* begin::Nav */}
        <ul className='menu menu-gray-600 menu-hover-primary fw-bold order-1'>
          <li className='menu-item '>
            <a href='#' className='menu-link ps-0 pe-5'>
              Terms of Service
            </a>
          </li>
          <li className='menu-item'>
            <a href='#' className='menu-link pe-0 pe-5'>
              Privacy
            </a>
          </li>
        </ul>
        {/* end::Nav */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Footer}
