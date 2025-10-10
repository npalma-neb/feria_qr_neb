import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ITEMS } from '../constants';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = ITEMS.find((i) => i.id === Number(id));

  if (!item) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Objeto no encontrado</h1>
        <Link to="/" className="text-lg text-[#E6C029] hover:underline">
          &larr; Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 animate-fade-in">
        <Link to="/" className="inline-block mb-8 text-lg text-[#E6C029] hover:underline transition-colors duration-300">
          &larr; Volver a la lista
        </Link>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 border-b-4 border-[#E6C029] pb-4">
        {item.title}
      </h1>
      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
        {item.longDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
