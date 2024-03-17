import { fetchUsers } from '@/lib/data';
import React from 'react';

const HomePage = async () => {
  const users = await fetchUsers();
  // console.log(users);
  return (
    <div>HomePage</div>
  )
}

export default HomePage;