import UserCard from './UserCard';
import usePage from '../hooks/usePage';
import { useEffect } from 'react';
import Buttons from './Buttons';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

export default function UserList({ users, openEdit, openDelete }) {
  const [page, setPage, maxPage, itemsPerPage] = usePage({
    data: users,
  });

  const theme = useTheme();
  useEffect(() => {
    scrollUp();
  }, [page]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentPageItem = users?.length
    ? users?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  return (
    <Box
      className="cards__container"
      sx={{
        backgroundColor: 'surface.main',
        borderRadius: '1rem',
        padding: '1rem',
      }}
    >
      <Box
        className="cards"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gridGap: '1em',
          justifyItems: 'center',
          width: '100%',
        }}
      >
        {currentPageItem?.map((user) => {
          return (
            <Box
              key={user.id}
              sx={{
                borderRadius: '1rem',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <UserCard
                user={user}
                openEdit={openEdit}
                openDelete={openDelete}
              />
            </Box>
          );
        })}
      </Box>
      <Box
        className="pagination"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Buttons page={page} maxPage={maxPage} setPage={setPage} />
      </Box>
    </Box>
  );
}
