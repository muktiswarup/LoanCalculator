import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
} from "@mui/material";
import { useEmiCalculator } from "../Hook/UseEmiCalculator";

const Home = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState("INR");

  const handleCalculate = () => {
    const emiValue = useEmiCalculator(loanAmount, interestRate, term * 12); // Convert years to months
    setEmi(emiValue);

    // Generate Amortization Schedule
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = term * 12;
    let balance = loanAmount;
    const scheduleData = [];
    for (let month = 1; month <= totalMonths; month++) {
      const interest = balance * monthlyRate;
      const principal = emiValue - interest;
      balance -= principal;
      scheduleData.push({
        month,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
    }
    setSchedule(scheduleData);
  };

  const handleReset = () => {
    setLoanAmount(10000);
    setInterestRate(8.5);
    setTerm(5);
    setEmi(0);
    setSchedule([]);
    setCurrency("INR");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, opacity: 0.9 }}>
        Loan Calculator Dashboard
      </Typography>

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="loan-amount"
          label="Loan Amount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
        <TextField
          id="interest-rate"
          label="Interest Rate (%)"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
        <TextField
          id="term"
          label="Term (Years)"
          type="number"
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleCalculate}>
        Calculate
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleReset}
        sx={{ ml: 1 }}
      >
        Reset
      </Button>
{emi > 0 && (
        <>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Monthly EMI: {currency} {emi.toFixed(2)}
            </Typography>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ ml: 1 }}
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
              <MenuItem value="JPY">JPY</MenuItem>
              <MenuItem value="AUD">AUD</MenuItem>
              <MenuItem value="CAD">CAD</MenuItem>
            </Select>
          </Box>
          <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
            Amortization Schedule
          </Typography>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell>Principal ({currency})</TableCell>
                  <TableCell>Interest ({currency})</TableCell>
                  <TableCell>Remaining Balance ({currency})</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {schedule.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell>{row.month}</TableCell>
                    <TableCell>{row.principal}</TableCell>
                    <TableCell>{row.interest}</TableCell>
                    <TableCell>{row.balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default Home;