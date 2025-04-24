// Admin layout with sidebar, header
export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <aside>Admin Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
