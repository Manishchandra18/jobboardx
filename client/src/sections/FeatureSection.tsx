import { Card, CardContent,  Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';

const features = [
  { title: 'Smart Matching', description: 'Our algorithms match the best candidates with your job listings.' },
  { title: 'Real-Time Alerts', description: 'Stay updated with notifications on new jobs or applicants.' },
  { title: 'Detailed Analytics', description: 'Track performance and engagement with built-in analytics.' },
];

function FeaturesSection() {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
          Why Choose JobBoardX?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Powerful features tailored for seamless hiring and job seeking
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default FeaturesSection;