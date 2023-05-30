import React from 'react';
import Navbar from '../Navbar/Navbar';
import { MovieDetail } from '@/types/MovieType';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [searchResults, setSearchResults] = React.useState<MovieDetail[]>([]);

  const handleSearchResult = (results: MovieDetail[]) => {
    setSearchResults(results);
  };

  return (
    <div>
      <header>
        <Navbar onSearchResult={handleSearchResult}></Navbar>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
