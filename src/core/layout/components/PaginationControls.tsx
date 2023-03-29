import React from 'react';

import Pagination from '@mui/lab/Pagination';
import { Box } from '@mui/material';
import styled from 'styled-components';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper = styled.div`
  .MuiPaginationItem-ellipsis {
    user-select: none;
  }
`;
const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <PaginationWrapper>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Pagination count={totalPages} page={currentPage} onChange={handleChange} />
      </Box>
    </PaginationWrapper>
  );
};

export default PaginationControls;
