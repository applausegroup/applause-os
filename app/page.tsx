import { 
  ChartBarIcon,
  CogIcon,
  UsersIcon,
  DocumentTextIcon,
  ServerIcon,
  ShieldCheckIcon,
  BeakerIcon,
  BellIcon,
  CubeIcon,
} from '@heroicons/react/24/outline'
import ApplauseLogo from './components/ApplauseLogo'

const tools = [
  {
    name: 'Analytics Dashboard',
    description: 'Real-time metrics and performance insights',
    icon: ChartBarIcon,
    href: '#',
    color: 'bg-blue-500',
    available: true,
  },
  {
    name: 'Team Management',
    description: 'User access control and permissions',
    icon: UsersIcon,
    href: '#',
    color: 'bg-green-500',
    available: true,
  },
  {
    name: 'Documentation',
    description: 'Internal guides and API references',
    icon: DocumentTextIcon,
    href: '#',
    color: 'bg-purple-500',
    available: true,
  },
  {
    name: 'Infrastructure',
    description: 'Server monitoring and deployment tools',
    icon: ServerIcon,
    href: '#',
    color: 'bg-orange-500',
    available: false,
  },
  {
    name: 'Security Center',
    description: 'Security audits and compliance tools',
    icon: ShieldCheckIcon,
    href: '#',
    color: 'bg-red-500',
    available: false,
  },
  {
    name: 'Testing Suite',
    description: 'Automated testing and QA tools',
    icon: BeakerIcon,
    href: '#',
    color: 'bg-indigo-500',
    available: false,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <ApplauseLogo className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Applause OS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your centralized hub for all internal Applause tools and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <a
                key={tool.name}
                href={tool.available ? tool.href : undefined}
                className={`
                  relative group rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-lg
                  transition-all duration-300 hover:shadow-xl
                  ${tool.available 
                    ? 'hover:scale-105 cursor-pointer' 
                    : 'opacity-60 cursor-not-allowed'
                  }
                `}
              >
                <div className="flex items-center mb-4">
                  <div className={`
                    ${tool.color} p-3 rounded-lg text-white
                    ${tool.available ? 'group-hover:scale-110' : ''}
                    transition-transform duration-300
                  `}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {!tool.available && (
                    <span className="ml-auto text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>

                {tool.available && (
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </a>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <BellIcon className="h-4 w-4" />
            <span>New tools are added regularly. Check back often!</span>
          </div>
        </div>
      </div>
    </div>
  )
}