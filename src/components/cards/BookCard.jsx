import React from 'react';
import { IMAGES } from '../../config/constants';

function BookCard({ book }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow duration-300">
      <img
        src={IMAGES.BOOK_COVER}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{book.title}</h3>
        <p className="text-gray-600">Year: {book.year}</p>
        <p className="text-gray-600">Author ID: {book.authorId}</p>
        <div className="mt-2">
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              book.available
                ? 'bg-purple-100 text-purple-800'
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