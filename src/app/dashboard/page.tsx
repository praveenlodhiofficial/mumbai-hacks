import { requireUser } from '@/lib/hooks';
import { NavbarDemo } from '../components/NavbarDemo';
// import { redirect } from 'next/navigation';
// import { Session } from 'next-auth';


const DashboardPage = async() => {
    // const session = await requireUser();
    return ( 
        <>
        <NavbarDemo/>
            <div className='m-60 text-3xl font-semibold text-center'>Welcome to Dashboard Page</div>
        </>
    )
}

export default DashboardPage
