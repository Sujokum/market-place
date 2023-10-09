'use client'
import React , {useState , useEffect} from "react";
import { Hub } from "aws-amplify";
import { useRouter } from 'next/navigation'
import { Amplify ,  Auth} from 'aws-amplify'
import awsConfig from '../../src/aws-exports'

Amplify.configure(awsConfig)
import dashboard from './dashboard.module.css'




export default function DashboardLayout({children }) {
    const router = useRouter()
    const [authChange , setAuthChange] = useState(false)
    const [admin , setAdmin] = useState()
    const listener = (data) => {
    
        switch (data.payload.event) {
          case "signIn":
          setAuthChange(!authChange)
          break;
          case "signOut":
          setAuthChange(!authChange)
         
          break;
        }
      };
    
      Hub.listen("auth", listener);

  const storeAuth = async ()=>{

    try {
        
            const user = await  Auth.currentAuthenticatedUser();
            
            const apiResponse = user?.signInUserSession?.idToken?.payload
            const groups = apiResponse['cognito:groups'];
            const username = user.username;
            const email = apiResponse.email;
                if(groups){
                    setAdmin(groups[0])
                    localStorage.setItem('aws-groups' , JSON.stringify(groups) )
                } else{
            
                    router.push('/', { scroll: false })
                }
                    
                    localStorage.setItem('aws-username' , JSON.stringify(username) )
                    localStorage.setItem('aws-email' , JSON.stringify(email) )
                    
                    
                } catch (error) {
                    
                    router.push('/', { scroll: false })
            }
              }

  
  useEffect(()=>{
    storeAuth();

  },[authChange])

// console.log(admin)

if(!admin){
    return <div className={dashboard.main} > <div className={dashboard.threeBody}>
    <div className={dashboard.threeBody__dot}></div>
    <div className={dashboard.threeBody__dot}></div>
    <div className={dashboard.threeBody__dot}></div>
    </div>
    </div>
}



    return <section className="container-fluid position-relative d-flex p-0">
        
        
        {children}
  
        </section>
  }