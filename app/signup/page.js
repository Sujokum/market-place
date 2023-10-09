'use client'
import React from 'react'
import { Amplify } from 'aws-amplify'
import awsConfig from '../../src/aws-exports'
import SignUp from '@/components/Admin/signup/SignUp'

Amplify.configure(awsConfig)
const page = () => {
  return (
    <div className="container-fluid bgDark position-relative d-flex p-0">
<SignUp/>
</div>
  )
}

export default page