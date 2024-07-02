import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className=' bg-slate-800 p-10'>
        <div className=' container w-[90%] mx-auto'>
          <h1 className=' text-white font-black text-4xl'>Administrador de Productos</h1>
        </div>
      </header>

      <main className=' mt-10 bg-white rounded-md shadow-md p-10 container w-[90%] mx-auto'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout