import { useEffect, useState } from 'react';
import personsImgs from '../../images/PersonsImage.webp';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from './SidebarContext';
import Courses from '../../images/Courses.png';
import Leaderboard from '../../images/leaderboard.png';
import Pause from '../../images/pause.png';
import AskDoubts from '../../images/Doubt.png';
import Events from '../../images/Events.png';
import Notes from '../../images/Notes.png';
import Certificate from '../../images/certificates.png';
import Placed from '../../images/Placed.png';

const navigationLinks = [
    { id: 1, title: 'Courses', image: Courses },
    { id: 2, title: 'Leaderboard', image: Leaderboard },
    { id: 3, title: 'Course Pause', image: Pause },
    { id: 4, title: 'Ask Doubts', image: AskDoubts },
    { id: 5, title: 'Events', image: Events },
    { id: 6, title: 'Notes', image: Notes },
    { id: 7, title: 'Certificate', image: Certificate },
    { id: 8, title: 'Placed Edflinger', image: Placed }
];

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if(isSidebarOpen){
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={ `sidebar ${sidebarClass}` }>
      <div className="user-info">
          <div className="info-img img-fit-cover">
              <img src={ personsImgs } alt="profile image" />
          </div>
          <span className="info-name">alice-doe</span>
      </div>

      <nav className="navigation">
          <ul className="nav-list">
            {
              navigationLinks.map((navigationLink) => (
                <li className="nav-item" key = { navigationLink.id }>
                  <a href="#" className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                      <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
                      <span className="nav-link-text">{ navigationLink.title }</span>
                  </a>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar;