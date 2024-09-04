'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Page() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://66d6d676006bfbe2e64ec73d.mockapi.io/journal/journals', {
        title,
        description,
        createdAt: new Date().toISOString()
      });
      router.push('/');
      router.refresh({ tags: ['journalEntries'] });
    } catch (err) {
      alert("journal create error!")
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[70%] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Journal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded focus: outline-[#3998c0]"
        />
        <textarea
          placeholder="description"
          value={description}
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded resize-none h-auto overflow-hidden focus: outline-[#3998c0]"
        />
        <button
          type="submit"
          className={`w-full p-2 bg-[#3998c0] text-white rounded hover:bg-[#2d799a] ${loading && "cursor-not-allowed"}`}
          disabled={loading}
        >
          {loading ? 'Adding Entry...' : 'Add Entry'}
        </button>
      </form>
    </div>
  );
}
