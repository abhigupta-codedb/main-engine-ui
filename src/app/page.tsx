import NoteForm from '@/components/NoteForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <NoteForm />
      </div>
    </div>
  );
}
