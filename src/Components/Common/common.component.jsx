import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Toolbar, Container, Grid, Paper } from '@mui/material';
import NavBarComponent from '../NavBar/navbar.component';
import Copyright from '../Copyright/copyright.component';
import Typography from '@mui/material/Typography';

const mdTheme = createTheme();


const CommonComp = (props) => {
  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <NavBarComponent />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {props.children}
          </Grid>
          <Copyright sx={{ pt: 4 }} />

        </Container>
      </Box>
    </Box>
  </ThemeProvider>
  );
}

CommonComp.propTypes = {
  children: PropTypes.node,
};

export default CommonComp;