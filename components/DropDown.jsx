'use client';

import { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Loader from './Loader';

export default function DropDown({ journalId }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [IsLoaderActive, setIsLoaderActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDropdownOpen]);

  const handleDelete = async () => {
    const confermation = window.confirm("Would you want to delete!");
    try {
      if (!confermation) return;
      setIsLoaderActive(true);
      await axios.delete(`https://66d6d676006bfbe2e64ec73d.mockapi.io/journal/journals/${journalId}`);
      router.refresh({ tags: ['journalEntries'] });
    } catch (error) {
      alert('Failed to delete journal')
    } finally {
      setIsLoaderActive(false);
      setIsDropdownOpen(false);
    }
  };

  const handleEdit = () => {
    router.push(`/edit/${journalId}`)
    router.refresh({ tags: ["getSingleJournal"] });
  }

  return (
    <div >
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-gray-500 hover:text-gray-700"
      >
        <BsThreeDotsVertical />
      </button>

      {isDropdownOpen && (
        <>
          <div
            onClick={() => setIsDropdownOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
          />
          <div className={`absolute right-0 min-h-8 w-32 bg-white border rounded-xl z-20 transition duration-300 ease-in-out ${IsLoaderActive && "backdrop-blur-sm bg-black bg-opacity-50"}`}>
            <button
              onClick={handleEdit}
              className="block w-full px-4 py-2 hover:bg-gray-100 rounded-xl"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="block w-full px-4 py-2 hover:bg-gray-100 text-red-500 rounded-xl"
            >
              Delete
            </button>
          </div>
        </>
      )}
      {IsLoaderActive && <Loader/>}
    </div>
  );
}
