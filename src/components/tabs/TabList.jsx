import React from 'react';
import { Tab } from '@headlessui/react';
import { classNames } from '../../utils/classNames';

function TabList({ categories }) {
  return (
    <Tab.List className="flex flex-col space-y-2 bg-purple-900/10 p-4 rounded-xl min-w-[200px]">
      {Object.keys(categories).map((category) => (
        <Tab
          key={category}
          className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-3 px-4 text-sm font-medium leading-5 text-left',
              'ring-purple-400 ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
              selected
                ? 'bg-purple-900 text-white shadow-lg'
                : 'text-black hover:bg-purple-100 hover:text-purple-900'
            )
          }
        >
          {category}
        </Tab>
      ))}
    </Tab.List>
  );
}

export default TabList;