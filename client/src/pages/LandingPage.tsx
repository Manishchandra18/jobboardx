import { lazy, Suspense } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/GridLegacy';

// Lazy-loaded sections
const FeaturesSection = lazy(() => import('../sections/FeatureSection'));
const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'));
const Footer = lazy(() => import('../sections/Footer'));

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa' }}>
      {/* Navbar */}
      <AppBar position="sticky" color="primary" elevation={3}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JobBoardX
          </Typography>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button color="inherit" onClick={() => navigate('/register')}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Hero Section */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Find the Perfect Job or Hire Top Talent
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              JobBoardX helps bridge the gap between passionate professionals and great companies.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                      I'm an Employer
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Find qualified candidates quickly and efficiently.
                    </Typography>
                    <Button fullWidth variant="contained" onClick={() => navigate('/login')}>
                      Go to Employer Dashboard
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" color="success.main" gutterBottom>
                      I'm a Job Seeker
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Browse job listings and apply with ease.
                    </Typography>
                    <Button fullWidth variant="contained" onClick={() => navigate('/login')}>
                      Go to Seeker Dashboard
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Lazy-loaded Features Section */}
        <Suspense fallback={<div>Loading Features...</div>}>
          <FeaturesSection />
        </Suspense>

        {/* Lazy-loaded Testimonials Section */}
        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <TestimonialsSection />
        </Suspense>
      </Container>

      {/* Lazy-loaded Footer */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </Box>
  );
}

export default LandingPage;
