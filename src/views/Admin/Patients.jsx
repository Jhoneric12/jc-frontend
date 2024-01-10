import React from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar';
import Header from '../../components/Admin/Header';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Admin/Title';

function Patients() {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('admin-token');
        localStorage.removeItem('admin-name');
        localStorage.removeItem('admin-token');
        navigate('/admin-login');
  };

  return (
    <section className='flex h-screen overflow-hidden'>
      <aside className='w-[20%]'>
        <AdminSideBar
          firstName={localStorage.getItem('admin-name')}
          id={'Admin'}
          handleLogOut={handleLogOut}
        />
      </aside>
      <main className='flex flex-1 flex-col overflow-y-auto paragraph w-[80%] '>
        <div className='w-full'>
          <Header />
        </div>
        <div className='p-6'>
            <div>
            <   Title title={'Patients'}/>
            </div>
        </div>
      </main>
    </section>
  )
}

export default Patients