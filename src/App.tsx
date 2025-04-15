
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Index from './pages/Index';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BlogEditor from './pages/BlogEditor';
import AdminRoute from './components/AdminRoute';
import EcommerceProject from './pages/projects/EcommerceProject';
import PortfolioProject from './pages/projects/PortfolioProject';
import TaskManagementProject from './pages/projects/TaskManagementProject';
import CMSProject from './pages/projects/CMSProject';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        
        {/* Project Routes */}
        <Route path="/projects/ecommerce" element={<EcommerceProject />} />
        <Route path="/projects/portfolio" element={<PortfolioProject />} />
        <Route path="/projects/task-management" element={<TaskManagementProject />} />
        <Route path="/projects/cms" element={<CMSProject />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />
        <Route path="/admin/edit" element={
          <AdminRoute>
            <BlogEditor />
          </AdminRoute>
        } />
        <Route path="/admin/edit/:id" element={
          <AdminRoute>
            <BlogEditor />
          </AdminRoute>
        } />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
