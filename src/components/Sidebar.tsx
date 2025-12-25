import { Home, CheckSquare, Calendar, FileText, Users, Settings, BarChart, Folder } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: CheckSquare, label: 'Tasks' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Folder, label: 'Projects' },
    { icon: Users, label: 'Team' },
    { icon: BarChart, label: 'Reports' },
    { icon: FileText, label: 'Documents' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200">
      {/* Logo area */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-8 w-8 object-contain"
          />
          <h2 className="text-lg font-bold text-gray-800">TaskFlow</h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-left transition-colors ${
                item.active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Projects section */}
        <div className="mt-8">
          <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Projects
          </h3>
          <div className="space-y-1">
            {['Website Redesign', 'Mobile App', 'Q4 Planning', 'Client Portal'].map((project) => (
              <button
                key={project}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{project}</span>
                </span>
                <span className="text-xs text-gray-400">12</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* User profile */}
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="flex-1">
            <p className="font-medium text-gray-800">John Doe</p>
            <p className="text-sm text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar