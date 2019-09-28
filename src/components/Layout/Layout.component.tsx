import React from 'react';

import { LayoutWrapper, Main } from './Layout.styles';

import { Header } from './layout/Header.component';
import { Footer } from './layout/Footer.component';
import { Sidebar } from './layout/Sidebar.component';
import { useSideDrawer } from '../../hooks/useSideDrawer';
import { useToggle } from '../../hooks/useToggle';
import { SearchForm } from './layout/SearchForm.component';

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSidebar, openSidebar, closeSidebar] = useSideDrawer();
  const [showSearchForm, toggleSearchForm] = useToggle();

  return (
    <LayoutWrapper>
      <Sidebar showSidebar={showSidebar} handleCloseSidebar={closeSidebar} />
      <Header handleOpen={openSidebar} toggleSearchForm={toggleSearchForm} />
      <SearchForm
        toggled={showSearchForm}
        toggleSearchForm={toggleSearchForm}
      />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};
