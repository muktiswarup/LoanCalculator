import React from "react";
import {
  Typography,
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const About = () => {
  const { themeStyles } = useTheme();

  return (
    <Box sx={{ ...themeStyles, minHeight: "100vh", py: 4 }} component="main">
      <Container maxWidth="md">
        {/* Header */}
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: "bold", opacity: 0.9 }}
        >
          About the Loan Calculator
        </Typography>

        {/* Introduction */}
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          Welcome to the Loan Calculator, a user-friendly tool designed to help you
          plan and manage your loans with ease. Whether you're calculating monthly
          payments, exploring amortization schedules, or comparing loan terms, our
          application provides accurate and intuitive solutions to empower your
          financial decisions.
        </Typography>

        {/* Purpose */}
        <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: "medium" }}>
          Our Purpose
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
          The Loan Calculator was created to simplify the process of understanding
          loan repayments. We aim to provide a transparent and reliable tool that
          helps users:
        </Typography>
        <List sx={{ mb: 3 }}>
          <ListItem>
            <ListItemText primary="Calculate monthly EMI (Equated Monthly Installment) with precision." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Visualize amortization schedules to understand principal and interest breakdowns." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Explore currency conversions for global usability." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Access real-time exchange rates for informed financial planning." />
          </ListItem>
        </List>

        {/* Features */}
        <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: "medium" }}>
          Key Features
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
          Our application is packed with features to enhance your experience:
        </Typography>
        <List sx={{ mb: 3 }}>
          <ListItem>
            <ListItemText primary="Dark/Light Mode: Seamlessly switch between themes for comfortable viewing." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Responsive Design: Use the calculator on any device, from desktops to mobiles." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Material-UI Components: Enjoy a modern and consistent user interface." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Live Exchange Rates: Stay updated with real-time currency data." />
          </ListItem>
        </List>

        {/* Call to Action */}
        <Divider sx={{ my: 4 }} />
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          Ready to calculate your loan? Try our calculator now or explore live
          exchange rates to make informed financial choices.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
          >
            Try the Calculator
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/exchange_rates_live"
          >
            View Exchange Rates
          </Button>
        </Box>

        {/* Footer Info */}
        <Divider sx={{ my: 4 }} />
        <Typography
          variant="body2"
          sx={{ mt: 4, color: "text.secondary", lineHeight: 1.6 }}
        >
          Developed by the Loan Calculator Team | Version 1.0 |{" "}
          <a
            href="mailto:support@loancalculator.com"
            style={{ color: "inherit", textDecoration: "underline" }}
          >
            Contact Us
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default About;