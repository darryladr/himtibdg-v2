import Link from 'next/link'
import LogoHimti from '@/components/Logo/Logo'
import { useRouter } from 'next/router'

interface INavItems {
    name: string
    href: string
    active: boolean
    img?: string
}

const navItems: Array<INavItems> = [
    { name: 'Home', href: '/', active: true },
    { name: 'Events', href: '/events', active: false },
    { name: 'CurhaTI', href: '/curhati', active: false },
    { name: 'About Us', href: '/about', active: false },
]

function Nav() {
    const router = useRouter()

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <nav className="h-full bg-transparent px-4 md:px-8 py-3">
            <div className="h-full container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <span>
                        <LogoHimti width={64} height={64} />
                    </span>
                </Link>
                <button
                    data-collapse-toggle="mobile-menu"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="mobile-menu"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {navItems.map((item) => (
                            <li key={item.name} className="nav-item">
                                <Link href={item.href} passHref>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            router.pathname === `${item.href}`
                                                ? 'font-bold'
                                                : 'font-normal text-himti-500 hover:underline',
                                            'text-himti-500 block py-2 px-3',
                                        )}
                                        aria-current={
                                            router.pathname === `${item.href}`
                                                ? 'page'
                                                : undefined
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
