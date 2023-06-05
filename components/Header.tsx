'use client';

import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';

const blue = '#0055d1';

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);
  return (
    <header>
      <div className="flex flex-col items-center rounded-b-2xl bg-gray-500/10 p-5 md:flex-row">
        <div
          className={`absolute left-0 top-0 h-96 w-full bg-gradient-to-br from-pink-400 to-[${blue}] -z-50 rounded-md opacity-50 blur-3xl filter`}
        />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello"
          width={300}
          height={100}
          className="w-44 object-contain pb-10 md:w-56 md:pb-0"
        />
        <div className="flex w-full flex-1 items-center justify-end space-x-5">
          <form className="flex flex-1 items-center space-x-5 rounded-md bg-white p-2 shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="test"
              className="flex-1 p-2 outline-none"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Donald Ivan" round color={blue} size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p
          className={`flex w-fit max-w-3xl items-center rounded-xl bg-white p-5 pr-5 text-sm font-light italic shadow-xl text-[${blue}]`}
        >
          <UserCircleIcon
            className={`mr-1 inline-block h-10 w-10 text-[${blue}]`}
          />
          GPT is summarising your task for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
