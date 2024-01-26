import SideNavBar from './_components/SideNavBar'
import TopHeader from './_components/TopHeader'

export default function layout({children}) {
  return (
    <div>
      <div className='hidden h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex bg-gradient-to-r from-green-300 to-green-400'>
        <SideNavBar/>
      </div>
      <div className='md:ml-64'>
        <TopHeader/>
        {children}
      </div>
      
    </div>
  )
}
