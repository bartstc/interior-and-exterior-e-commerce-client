import React from 'react';

import { Header } from './layout/Header.component';
import { Footer } from './layout/Footer.component';
import { SidebarContainer } from './layout/Sidebar.component';
import { useSideDrawer } from '../../hooks/useSideDrawer';
import { useToggle } from '../../hooks/useToggle';
import { SearchForm } from './layout/SearchForm.component';

import { LayoutWrapper, Main } from './Layout.styles';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const [showSidebar, openSidebar, closeSidebar] = useSideDrawer();
  const [showSearchForm, toggleSearchForm] = useToggle();

  return (
    <LayoutWrapper>
      <SidebarContainer
        showSidebar={showSidebar}
        handleCloseSidebar={closeSidebar}
      />
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
