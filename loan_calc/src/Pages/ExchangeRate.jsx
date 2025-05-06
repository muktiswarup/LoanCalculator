import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Pagination,
} from '@mui/material';

const ExchangeRate = () => {
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://v6.exchangerate-api.com/v6/3e64651203b998cc64f23dc0/latest/USD'
        );
        setRate(res.data.conversion_rates);
        console.log(res);
      } catch (error) {
        setError('Failed to fetch the data');
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const pageLimit = 10;
  const totalPages = rate ? Math.ceil(Object.keys(rate).length / pageLimit) : 0;
  const startIndex = (page - 1) * pageLimit;
  const selectedPage = rate
    ? Object.entries(rate).slice(startIndex, startIndex + pageLimit)
    : [];

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Live Exchange Rates (Base: USD)
      </Typography>
      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}
      {!rate ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Currency</TableCell>
                  <TableCell align="right">Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedPage.map(([currency, value]) => (
                  <TableRow key={currency}>
                    <TableCell>{currency}</TableCell>
                    <TableCell align="right">{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
          />
        </>
      )}
    </div>
  );
};

export default ExchangeRate;