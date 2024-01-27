'use client'
import SideNavBar from './_components/SideNavBar'
import TopHeader from './_components/TopHeader'
import { useEffect, useState } from 'react'

export default function layout({children}) {

  const [activateSideBar, setActivateSideBar] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if(activateSideBar && !e.target.closest('.my-side-bar')) {
        setActivateSideBar(false)
      }
    }
    // Add event listener when component mounts
    document.addEventListener('click', handleOutsideClick);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [activateSideBar])

  return (
    <div>
      <div className={`${activateSideBar === false ? 'hidden' : ''} h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex bg-gradient-to-r from-green-300 to-green-400`}>
        <SideNavBar setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
      </div>
      <div className={`md:ml-64 transition-margin duration-300 ease-in-out ${activateSideBar ? 'ml-32' : 'ml-0'}`}>
        <TopHeader setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
        {children}
      </div>
      
    </div>
  )
}

// // layout.js
// 'use client'
// import SideNavBar from './_components/SideNavBar'
// import TopHeader from './_components/TopHeader'
// import { useEffect, useState } from 'react'

// export default function Layout({children}) {
//   const [activateSideBar, setActivateSideBar] = useState(false)

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (activateSideBar && !e.target.closest('.my-side-bar')) {
//         setActivateSideBar(false)
//       }
//     }
//     // Add event listener when component mounts
//     document.addEventListener('click', handleOutsideClick);

//     // Remove event listener when component unmounts
//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     }
//   }, [activateSideBar])

//   return (
//     <div>
//       <div className={`transform transition-transform duration-300 ease-in-out`}>
//         <div className={` ${activateSideBar === false ? 'hidden' : ''} h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex bg-gradient-to-r from-green-300 to-green-400 my-side-bar`}>
//           <SideNavBar setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
//         </div>
//       </div>
//       <div className={`md:ml-64 transition-margin duration-300 ease-in-out ${activateSideBar ? 'ml-32' : 'ml-0'}`}>
//         <TopHeader setActivateSideBar={setActivateSideBar} activateSideBar={activateSideBar}/>
//         {children}
//       </div>
//     </div>
//   )
// }
