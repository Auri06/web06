import React from 'react';
import { Tab } from '@headlessui/react';
import BookCard from '../cards/BookCard';
import AuthorCard from '../cards/AuthorCard';

function TabPanels({ categories }) {
  return (
    <Tab.Panels className="flex-1">
      {Object.values(categories).map((items, idx) => (
        <Tab.Panel
          key={idx}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            item.nationality ? (
              <AuthorCard key={item.id} author={item} />
            ) : (
              <BookCard key={item.id} book={item} />
            )
          ))}
        </Tab.Panel>
      ))}
    </Tab.Panels>
  );
}

export default TabPanels;