import { Card, CardContent,  Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
const testimonials = [
  { name: 'Alice Johnson', quote: 'JobBoardX helped me land my dream job within a week!', title: 'Software Engineer' },
  { name: 'Mike Smith', quote: 'The hiring process became so much faster and easier.', title: 'HR Manager' },
  { name: 'Sarah Lee', quote: 'Intuitive design and great features. Highly recommended!', title: 'Marketing Director' },
];

function TestimonialsSection() {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
          What Our Users Say
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((t, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body2" fontStyle="italic" color="text.secondary" gutterBottom>
                    "{t.quote}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold" color="primary">
                    {t.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.title}
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

export default TestimonialsSection;