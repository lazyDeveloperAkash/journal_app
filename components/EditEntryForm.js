'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EditEntryForm = ({ entry }) => {
    const [title, setTitle] = useState(entry.title || '');
    const [description, setDescription] = useState(entry.description || '');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`https://66d6d676006bfbe2e64ec73d.mockapi.io/journal/journals/${entry.id}`, {
                title,
                description,
            });
            router.push('/');
            router.refresh({ tags: ["journalEntries"] });
        } catch (err) {
            alert('Failed to update journal.')
            setLoading(false);
        }
    };

    return (
        <div className="max-w-[70%] mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Edit Journal</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 border rounded focus:outline-[#3998c0]"
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={5}
                    className="w-full p-2 border rounded resize-none h-auto overflow-hidden focus:outline-[#3998c0]"
                />
                <button
                    type="submit"
                    className={`w-full p-2 bg-[#3998c0] text-white rounded hover:bg-[#2d799a] ${loading && "cursor-not-allowed"}`}
                    disabled={loading}
                >
                    {loading ? 'Editing Journal...' : 'Edit Journal'}
                </button>
            </form>
        </div>
    );
};

export default EditEntryForm;
