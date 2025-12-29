import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/admin" className="text-xl font-bold text-green-700">
            Vidhi Admin
          </Link>
          <div className="space-x-4">
            <Link href="/admin/pages" className="text-gray-600 hover:text-green-700">Pages</Link>
            <Link href="/admin/categories" className="text-gray-600 hover:text-green-700">Categories</Link>
            <Link href="/admin/products" className="text-gray-600 hover:text-green-700">Products</Link>
            <Link href="/admin/contacts" className="text-gray-600 hover:text-green-700">Contacts</Link>
            <Link href="/api/admin/logout" className="text-red-600 hover:text-red-800">Logout</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-8">
        {children}
      </main>
    </div>
  );
}
