'use client'
import React from 'react'
import SignIn from '@/components/Admin/signIn/SignIn'
import { Amplify } from 'aws-amplify'
import awsConfig from '../../src/aws-exports'


Amplify.configure(awsConfig)


const page = () => {
  return (
    <div className="container-fluid bg-white position-relative d-flex p-0">
<SignIn/>
</div>
  )
}

export default page