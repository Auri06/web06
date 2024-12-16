import React from 'react';
import { IMAGES } from '../../config/constants';

function AuthorCard({ author }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow duration-300">
      <img
        src={IMAGES.AUTHOR_AVATAR}
        alt={author.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{author.name}</h3>
        <p className="text-gray-600">Nationality: {author.nationality}</p>
      </div>
    </div>
  );
}

export default AuthorCard;