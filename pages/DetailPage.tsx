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

  const isPortrait = item?.videoAspect === 'portrait';
  const videoSrc = React.useMemo(() => {
    const src = item.videoUrl;
    try {
      const url = new URL(src);
      // Autoplay sólo garantizable en YouTube si está silenciado
      if (url.hostname.includes('youtube.com')) {
        url.searchParams.set('autoplay', '1');
        url.searchParams.set('mute', '1');
        url.searchParams.set('playsinline', '1');
        return url.toString();
      }
      // Google Drive preview no asegura autoplay; dejamos el src tal cual
      return src;
    } catch (_) {
      return src;
    }
  }, [item.videoUrl]);

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Video a la izquierda: 9:16 si es vertical, 16:9 si no */}
        <div>
          {item.videoUrl && (
            <div className={`relative w-full ${isPortrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-md"
                src={videoSrc}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>
        {/* Contenido a la derecha */}
        <div>
          <Link to="/" className="inline-block mb-6 text-lg text-[#E6C029] hover:underline transition-colors duration-300">
            &larr; Volver a la lista
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 border-b-4 border-[#E6C029] pb-3">
            {item.title}
          </h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
            {item.longDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
