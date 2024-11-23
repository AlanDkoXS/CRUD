import UserCard from './UserCard';
import '../assets/styles/UserList.css';
import usePage from '../hooks/usePage';
import { useEffect } from 'react';
import Buttons from './Buttons';

export default function UserList({ users, openEdit, openDelete }) {
  const [page, setPage, maxPage, itemsPerPage] = usePage({
    data: users,
  });

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
    <div className="cards__container">
      <div className="cards">
        {currentPageItem?.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              openEdit={openEdit}
              openDelete={openDelete}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Buttons page={page} maxPage={maxPage} setPage={setPage} />
      </div>
    </div>
  );
}
