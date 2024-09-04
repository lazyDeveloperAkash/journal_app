import EditEntryForm from '@/components/EditEntryForm';

export const getJournal = async (id) => {
  const res = await fetch(`https://66d6d676006bfbe2e64ec73d.mockapi.io/journal/journals/${id}`, {
    cache: 'no-store',
    next: { tags: ["getSingleJournal"] }
  });
  return await res.json();
}

const page = async ({ params }) => {
  const entry = await getJournal(params.id);
  return (
    <EditEntryForm entry={entry} />
  )
}

export default page