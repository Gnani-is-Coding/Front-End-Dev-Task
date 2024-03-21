import Image from "next/image";
import Dashboard from "./dashboard";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react"; 


export default function Home() {
  const {data: session, status} = useSession()

  if (status === 'authenticated') {
    return(
    <div>
        <Dashboard/>
      </div>
    )
    
  }
  
}

//For Service Side Rendering
export const  getServerSideProps =  async(context) => {
  const session = await getSession(context)

  if (!session) {
      return{
          redirect:{
              destination: '/login',
          }
      }
  }

  return {
      props: {session},
  }
}
