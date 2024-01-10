import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSideBar from '../../components/Admin/AdminSideBar';
import Header from '../../components/Admin/Header';
import Title from '../../components/Admin/Title';

function Dashboard() {
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
        <div className=' p-6'>
          <div>
            <Title title={'Dashboard'}/>
          </div>
          <div className='flex justify-between'>
            <div>
                <div class='text-center border-2 border-[#4FBD5E] rounded-[4px] text-[#232323]'>
                  <div class='py-6 px-20'>
                      <h1 class='text-small font-semibold'>8</h1>
                      <h2 class='text-xxSmall'>Appointments</h2>
                  </div>
                  <div class='border-t-2 border-t-[#4FBD5E] py-1'>
                      <p className='text-superSmall'>View Detailed Report</p>
                  </div>
                </div>
            </div>
            <div>
                <div class='text-center border-2 border-[#FEE040] rounded-[4px] text-[#232323]'>
                  <div class='py-6 px-20'>
                      <h1 class='text-medium font-semibold'>P42,000</h1>
                      <h2 class='text-xxSmall'>Monthly Revenue</h2>
                  </div>
                  <div class='border-t-2 border-t-[#FEE040] py-1'>
                      <p className='text-superSmall'>View Detailed Report</p>
                  </div>
                </div>
            </div>
            <div>
                <div class='text-center border-2 border-[#42BDF7] rounded-[4px] text-[#232323]'>
                  <div class='py-6 px-20'>
                      <h1 class='text-medium font-semibold'>34</h1>
                      <h2 class='text-xxSmall'>No. of Patients</h2>
                  </div>
                  <div class='border-t-2 border-t-[#42BDF7] py-1'>
                      <p className='text-superSmall'>View Detailed Report</p>
                  </div>
                </div>
            </div>
            <div>
                <div class='text-center border-2 border-[red] rounded-[4px] text-[#232323]'>
                  <div class='py-6 px-20'>
                      <h1 class='text-medium font-semibold'>2</h1>
                      <h2 class='text-xxSmall'>Critical Products</h2>
                  </div>
                  <div class='border-t-2 border-t-[red] py-1'>
                      <p className='text-superSmall'>View Detailed Report</p>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
      </main>
    </section>
  );
}

export default Dashboard;
