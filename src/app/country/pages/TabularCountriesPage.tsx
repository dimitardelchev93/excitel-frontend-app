import React, { useCallback, useState } from 'react';

import { TextField, CircularProgress } from '@mui/material';
import styled from 'styled-components';

import PaginationControls from 'core/layout/components/PaginationControls';

import CountriesTable from '../components/CountiesTable';
import CountryDetails from '../components/CountryDetails';
import NoCountriesFound from '../components/NoCountriesFound';
import { useCountryDetails } from '../hooks/useCountryDetails';
import { usePaginatedCountries } from '../hooks/usePaginatedCountries';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

const FilterWrapper = styled.div`
  margin-bottom: 20px;
`;

const TabularCountriesPage: React.FC = () => {
  const [criteria, setCriteria] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: paginatedCountries,
    loading,
    handleSort,
    totalPages,
  } = usePaginatedCountries(criteria, currentPage);
  const { showDetails, open, country, closeDetails } = useCountryDetails();
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Wrapper>
      <FilterWrapper>
        <TextField
          label="Filter by name"
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
          fullWidth
        />
      </FilterWrapper>
      {paginatedCountries.length > 0 ? (
        <CountriesTable
          countries={paginatedCountries}
          handleSort={handleSort}
          onCountryLongPress={showDetails}
        />
      ) : (
        <NoCountriesFound />
      )}
      {paginatedCountries.length > 0 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      <CountryDetails open={open} country={country} onClose={closeDetails} />
    </Wrapper>
  );
};

export default TabularCountriesPage;
