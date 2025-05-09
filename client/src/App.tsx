import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

// Lazy-loaded components
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Dashboard = lazy(() => import('./pages/seeker/Dashboard'));
const Profile = lazy(() => import('./pages/seeker/Profile'));
const BrowseJobs = lazy(() => import('./pages/seeker/BrowseJobs'));
const JobDetails = lazy(() => import('./pages/seeker/JobDetails'));
const ApplyJob = lazy(() => import('./pages/seeker/ApplyJobs'));
const MyApplications = lazy(() => import('./pages/seeker/MyApplications'));
const DashboardEmployer = lazy(() => import('./pages/employer/DashboardEmployer'));
const PostJob = lazy(() => import('./pages/employer/PostJob'));
const ManageJobs = lazy(() => import('./pages/employer/ManageJobs'));
const ViewApplicants = lazy(() => import('./pages/employer/ViewApplicants'));
const EditJob = lazy(() => import('./pages/employer/EditJob'));
const EmployerProfile = lazy(() => import('./pages/employer/EmployerProfile'));
const EmployerApplicantsPage = lazy(() => import('./pages/employer/EmployerApplicantsPage'));
const LandingPage = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Seeker Routes */}
          <Route path="/seeker/dashboard" element={<PrivateRoute value={undefined}><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute value={undefined}><Profile /></PrivateRoute>} />
          <Route path="/jobs" element={<PrivateRoute value={undefined}><BrowseJobs /></PrivateRoute>} />
          <Route path="/jobs/:id" element={<PrivateRoute value={undefined}><JobDetails /></PrivateRoute>} />
          <Route path="/apply/:id" element={<PrivateRoute value={undefined}><ApplyJob /></PrivateRoute>} />
          <Route path="/applications" element={<PrivateRoute value={undefined}><MyApplications /></PrivateRoute>} />

          {/* Employer Routes */}
          <Route path="/employer/dashboard" element={<PrivateRoute value={undefined}><DashboardEmployer /></PrivateRoute>} />
          <Route path="/employer/post-job" element={<PrivateRoute value={undefined}><PostJob /></PrivateRoute>} />
          <Route path="/employer/manage-jobs" element={<PrivateRoute value={undefined}><ManageJobs /></PrivateRoute>} />
          <Route path="/employer/view-applicants/:jobId" element={<PrivateRoute value={undefined}><ViewApplicants /></PrivateRoute>} />
          <Route path="/employer/edit-job/:id" element={<PrivateRoute value={undefined}><EditJob /></PrivateRoute>} />
          <Route path="/employer/profile" element={<EmployerProfile />} />
          <Route path="/employer/applicants" element={<PrivateRoute value={undefined}><EmployerApplicantsPage /></PrivateRoute>} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;


