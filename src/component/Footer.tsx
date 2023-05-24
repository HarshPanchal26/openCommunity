import { Link ,useLocation} from 'react-router-dom'
export default function Footer() {  
  
  const location = useLocation().pathname;
    const isAuthentication = (location === '/WhoWeAre' || location === '/Mission' || location === '/JoinUs'
        || location === '/')

    if (!isAuthentication) {

        return null
    }
    return (

        <footer aria-label="Site Footer" className="bg-gray-50 bottom-0">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center  sm:justify-start">
                        <Link to="/" className="-m-1.5 p-1.5 flex">
                            <span className="font-extrabold text-3xl text-green-500">Open</span><span className="font-extrabold text-3xl text-black">Community</span>
                        </Link>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
