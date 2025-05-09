import { Box, Container,  Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
function Footer() {
  return (
    <Box sx={{ bgcolor: '#0d47a1', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              About JobBoardX
            </Typography>
            <Typography variant="body2">
              JobBoardX connects talent with top companies using smart technology.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="hover" color="inherit">Home</Link>
              <Link href="#" underline="hover" color="inherit">Jobs</Link>
              <Link href="#" underline="hover" color="inherit">Employers</Link>
              <Link href="#" underline="hover" color="inherit">Contact</Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" underline="hover" color="inherit">Twitter</Link>
              <Link href="#" underline="hover" color="inherit">LinkedIn</Link>
              <Link href="#" underline="hover" color="inherit">Facebook</Link>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="caption">
            © {new Date().getFullYear()} JobBoardX. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;