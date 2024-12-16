import React from 'react';
import { Tab } from '@headlessui/react';
import TabList from './tabs/TabList';
import TabPanels from './tabs/TabPanels';
import useBooks from '../hooks/useBooks';
import useAuthors from '../hooks/useAuthors';

function TabContent() {
  const { data: allBooks } = useBooks();
  const { data: availableBooks } = useBooks('/available');
  const { data: unavailableBooks } = useBooks('/unavailable');
  const { data: authors } = useAuthors();

  const categories = {
    'All Books': allBooks || [],
    'Available Books': availableBooks || [],
    'Unavailable Books': unavailableBooks || [],
    'Authors': authors || [],
  };

  return (
    <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
      <Tab.Group vertical>
        <TabList categories={categories} />
        <TabPanels categories={categories} />
      </Tab.Group>
    </div>
  );
}

export default TabContent;