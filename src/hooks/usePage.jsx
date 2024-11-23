import { useState } from "react";

export default function usePage({ data }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const totalItems = data ? data?.length : 0;
  const maxPage = Math.ceil(totalItems / itemsPerPage);

  return [page, setPage, maxPage, itemsPerPage];
}
