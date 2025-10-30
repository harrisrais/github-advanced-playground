// src/pages/users.tsx
import { useEffect, useState } from 'react';

type User = {
    id: number;
    name: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-purple-600">Users (Client-side)</h1>
            {loading ? (
                <div className="flex justify-left items-center h-32">
                    <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <ul className="list-disc pl-5 space-y-2">
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </main>
    );
}
