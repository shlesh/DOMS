import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, People, Book, SportsEsports, School, Work, Phone } from '@material-ui/icons';

const SidebarContainer = styled.div`
  display: flex;
`;

const SidebarDrawer = styled(Drawer)`
  width: 240px;
`;

const SidebarList = styled(List)`
  width: 240px;
`;

const SidebarListItem = styled(ListItem)`
  cursor: pointer;
`;

const SidebarListItemIcon = styled(ListItemIcon)`
  color: #000;
`;

const SidebarListItemText = styled(ListItemText)`
  color: #000;
`;

const Sidebar = ({ open, onClose }) => {
  return (
    <SidebarContainer>
      <SidebarDrawer anchor="left" open={open} onClose={onClose}>
        <SidebarList>
          <Link to="/" onClick={onClose}>
            <SidebarListItem button>
              <SidebarListItemIcon>
                <Home />
              </SidebarListItemIcon>
              <SidebarListItemText primary="Home" />
            </SidebarListItem>
          </Link>
          <Link to="/faculty" onClick={onClose}>
            <SidebarListItem button>
              <SidebarListItemIcon>
                <People />
              </SidebarListItemIcon>
              <SidebarListItemText primary="Faculty" />
            </SidebarListItem>
          </Link>
          <Link to="/courses" onClick={onClose}>
            <SidebarListItem button>
              <SidebarListItemIcon>
                <Book />
              </SidebarListItemIcon>
              <SidebarListItemText primary="Courses" />
            </SidebarListItem>
          </Link>
          <Link to="/activities" onClick={onClose}>
            <SidebarListItem button>
              <SidebarListItemIcon>
                <SportsEsports />
              </SidebarListItemIcon>
              <SidebarListItemText primary="Activities" />
            </SidebarListItem>
          </Link>
          <Link to="/admissions" onClick={onClose}>
            <SidebarListItem button>
              <SidebarListItemIcon>
                <School />
              </SidebarListItemIcon>
              <SidebarListItemText primary="Admissions" />
            </SidebarListItem>
          </Link>
          <Link to="/placements" onClick={onClose}>
            <SidebarListItem button>
              <SidebarListItemIcon>
                <Work />
              </SidebarListItemIcon>
              <SidebarListItemText primary="Placements" />
            </SidebarListItem>
          </Link>
          <Link to="/contact" onClick={onClose}>
            <SidebarListItem button>
              <SidebarListItemIcon>
                <Phone />
              </SidebarListItemIcon>
              <SidebarListItemText primary="Contact Us" />
            </SidebarListItem>
          </Link>
        </SidebarList>
      </SidebarDrawer>
    </SidebarContainer>
  );
};

export default Sidebar;
