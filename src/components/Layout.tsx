import { Link } from 'react-router-dom';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow p-4 text-center text-xl font-bold">
                <Link to="/">🛍️ Product Mini Project</Link>
            </header>
            <main className="max-w-2xl mx-auto p-4">{children}</main>
        </div>
    );
};

export default Layout;
