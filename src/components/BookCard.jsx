import React from 'react';

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://img.freepik.com/vector-premium/coleccion-escolar-libro-cerrado-rojo-estilo-dibujos-animados-ilustracion-vectorial_543641-127.jpg?w=740"
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">Year: {book.year}</p>
        <p className="text-gray-600">Author ID: {book.authorId}</p>
        <div className="mt-2">
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              book.available
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {book.available ? 'Available' : 'Not Available'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;