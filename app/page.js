import DropDown from '@/components/DropDown';
import { DateConverter } from '@/utills/DateConverter';

export const getJournalData = async () => {
  const res = await fetch('https://66d6d676006bfbe2e64ec73d.mockapi.io/journal/journals', {
    cache: 'no-store',
    next: { tags: ['journalEntries'] },
  });

  return await res.json();
}

export default async function Page() {

  const entries = await getJournalData();

  return (
    <div className="relative mb-6">
      <ul className="flex flex-col items-center gap-8">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="relative flex flex-col gap-2 mx-auto px-6 py-2 shadow-md leading-relaxed rounded-lg overflow-hidden w-[70%]"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">{entry.title}</h2>
              <DropDown entryId={entry.id} />
            </div>
            <div className="px-2 py-1 rounded-2xl bg-[#3998c0] max-w-32 flex items-center justify-center">
              <p className="text-xs text-white">{DateConverter(entry.createdAt)}</p>
            </div>
            <p className="text-gray-600 opacity-80">{entry.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
