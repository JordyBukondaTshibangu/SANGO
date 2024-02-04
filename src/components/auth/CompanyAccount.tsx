import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Link from 'next/link';


const SignUpPage = () => {
  return (
    <div className="flex">
      <div className='w-full flex-1 flex flex-col gap-10 py-10'>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <label htmlFor="Email">Company name</label>
            <div className="w-full flex">
              <TextField
                type='text'
                label="Full name"
                variant="outlined"
                className='w-full rounded-r-0 bg-lightGray'
              />
              <span className='flex items-center justify-center w-14 h-full bg-primary rounded-tr-md rounded-br-md'>
                <ApartmentIcon className='text-white'/>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="Email">Company Email address</label>
            <div className="w-full flex">
              <TextField
                id="outlined-basic"
                type='email'
                label="Email"
                variant="outlined"
                className='w-full rounded-r-0 bg-lightGray'
              />
              <span className='flex items-center justify-center w-14 h-full bg-primary rounded-tr-md rounded-br-md'>
                <EmailIcon className='text-white'/>
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="Password">Password</label>
            <div className="w-full flex">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                className='w-full rounded-r-0 bg-lightGray'
              />
              <span className='flex items-center justify-center w-14 h-full bg-primary rounded-tr-md rounded-br-md'>
                <LockIcon className='text-white' />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="Password">Confirm Password</label>
            <div className="w-full flex">
              <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                className='w-full rounded-r-0 bg-lightGray'
              />
              <span className='flex items-center justify-center w-14 h-full bg-primary rounded-tr-md rounded-br-md'>
                <LockIcon className='text-white' />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Button variant="contained" className='bg-primary py-3 hover:bg-primary'>Register Company</Button>
          <Link href='/signin' >
            <Button variant="outlined" className='w-full border-primary text-primary py-3 hover:border-primary'>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage