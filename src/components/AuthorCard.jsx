import React from 'react';

function AuthorCard({ author }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/796/537/non_2x/user-icon-on-white-background-man-symbol-user-login-icon-user-profile-with-plus-glyph-sign-vector.jpg"
        alt={author.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{author.name}</h3>
        <p className="text-gray-600">Nationality: {author.nationality}</p>
      </div>
    </div>
  );
}

export default AuthorCard;