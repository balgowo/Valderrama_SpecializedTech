import { useEffect, useState } from 'react';
import '../App.css';
import JSONCard from '../components/JSONCard';

export default function JSON() {

  interface User {
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  }
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <div className="JSONbody">
        <div className="JSONWrapper">
          <h1>SHEEEEEEEEEEEEEEEEEEESH</h1>
          <div className="JSONCardHolder">
          {users.map((user) => (
            <JSONCard key={user.name} user={user} />
          ))}
          </div>
        </div>
      </div>
    </>
  )
}
