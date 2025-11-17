import React from 'react';
import { Link } from 'react-router-dom';
import { ITEMS } from '../constants';

interface ListPageProps {
  showSorteoBanner?: boolean;
  onSorteoClick?: () => void;
}

const ListPage: React.FC<ListPageProps> = ({ showSorteoBanner = false, onSorteoClick }) => {
  return (
    <div className="animate-fade-in">
      {showSorteoBanner && (
        <div className="mb-6">
          <div className="rounded-lg bg-[#FFF8D6] dark:bg-[#3A3417] border border-[#E6C029] text-gray-900 dark:text-gray-100 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-sm sm:text-base">
              <strong className="font-semibold">NEB educa:</strong> deja tu correo y aprende con nosotros.
            </div>
            <button
              onClick={onSorteoClick}
              className="inline-flex items-center justify-center rounded-md bg-[#E6C029] text-black font-semibold px-4 py-2 hover:brightness-95 transition"
            >
              Participar
            </button>
          </div>
        </div>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">NEB Educa</h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-10">Aprender sobre tecnologías innovadoras y soluciones sostenibles.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ITEMS.map((item) => (
          <Link
            to={`/item/${item.id}`}
            key={item.id}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl dark:hover:shadow-[#E6C029]/20 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
          >
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#E6C029] transition-colors duration-300">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.shortDescription}</p>
            </div>
            <div className="px-6 pb-4 pt-2">
                <span className="inline-block bg-gray-200 dark:bg-gray-700 group-hover:bg-[#E6C029] group-hover:text-black dark:group-hover:text-black rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 transition-colors duration-300">
                    Ver más &rarr;
                </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
