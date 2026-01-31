'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { AdminOnly } from '@/components/RoleBasedComponent';

const Sidebar = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  const menuItems = [
    { label: 'Dashboard', href: '/admin', exact: true },
    { label: 'Pages', href: '/admin/pages' },
    { label: 'Categories', href: '/admin/categories' },
    { label: 'Subcategories', href: '/admin/subcategories' },
    { label: 'Products', href: '/admin/products' },
    { label: 'Blog Posts', href: '/admin/posts' },
    { label: 'Contacts', href: '/admin/contacts' },
  ];

  const adminItems = [
    { label: 'Users', href: '/admin/users' },
    { label: 'Approvals', href: '/admin/changes' },
    { label: 'Settings', href: '/admin/settings' },
  ];

  const isActive = (href: string, exact: boolean = false) => {
    if (exact) {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen flex flex-col flex-shrink-0">
      <div className="p-6 border-b border-gray-800">
        <Link href="/admin" className="text-2xl font-bold text-green-500">
          Vidhi Admin
        </Link>
      </div>

      <div className="p-4 border-b border-gray-800">
          <div className="text-sm font-medium text-gray-400">Logged in as:</div>
          <div className="text-sm text-white truncate" title={user?.email || ''}>
            {user?.email}
          </div>
           <div className="text-xs text-gray-500 uppercase mt-1">
            {user?.role}
          </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
              isActive(item.href, item.exact)
                ? 'bg-green-700 text-white'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}

        <AdminOnly>
          <div className="mt-4 mb-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Admin Management
          </div>
          {adminItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive(item.href)
                  ? 'bg-green-700 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </AdminOnly>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
