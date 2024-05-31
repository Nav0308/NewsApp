import {ClerkProvider as CP } from "@clerk/clerk-react"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

export const ClerkProvider = ({children}) => {
  return (
    <CP publishableKey={PUBLISHABLE_KEY}>
        {children}
    </CP>
  )
}

export default ClerkProvider





// import{ClerkProvider as CP} from '@clerk/clerk-react'

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

// export const ClerkProvider = ({children}) => {
//   return (
//     <CP publishableKey={PUBLISHABLE_KEY}>
//           {children}
//     </CP>
//   )
// }

// export default ClerkProvider