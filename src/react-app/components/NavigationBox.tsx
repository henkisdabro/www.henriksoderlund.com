import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

const NavigationBox: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const location = useLocation();

  const pages = [
    { path: '/', name: 'Home', emoji: '🏠' },
    { path: '/skills', name: 'Skills', emoji: '🛠️' },
    { path: '/work-experience', name: 'Work Experience', emoji: '💼' },
    { path: '/education', name: 'Education', emoji: '🎓' },
    { path: '/consultation', name: 'Consultation', emoji: '💬' }
  ];

  useEffect(() => {
    const scanHeadings = () => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const headingItems: HeadingItem[] = [];

      headingElements.forEach((heading, index) => {
        const text = heading.textContent || '';
        const level = parseInt(heading.tagName.charAt(1));
        
        // Skip headings with these specific texts
        if (text === 'Pages' || text === 'On This Page' || text === 'Navigation') {
          return;
        }
        
        // Create an ID if it doesn't exist
        let id = heading.id;
        if (!id) {
          id = `heading-${index}`;
          heading.id = id;
        }

        headingItems.push({ id, text, level });
      });

      setHeadings(headingItems);
    };

    // Scan headings after component mounts and when route changes
    const timeout = setTimeout(scanHeadings, 100);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCurrentPageName = () => {
    const currentPage = pages.find(page => page.path === location.pathname);
    return currentPage ? `${currentPage.emoji} ${currentPage.name}` : '';
  };

  return (
    <div className={`navigation-box ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="nav-box-header">
        <button 
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand navigation' : 'Collapse navigation'}
        >
          {isCollapsed ? '▶' : '▼'}
        </button>
      </div>

      {!isCollapsed && (
        <div className="nav-box-content">
          {/* Page Navigation */}
          <div className="nav-section">
            <h5>Pages</h5>
            <ul className="nav-list">
              {pages.map(page => (
                <li key={page.path} className={location.pathname === page.path ? 'active' : ''}>
                  <Link to={page.path}>
                    {page.emoji} {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          {headings.length > 0 && <div className="nav-divider"></div>}

          {/* Current Page Headings */}
          {headings.length > 0 && (
            <div className="nav-section">
              <h5>On This Page</h5>
              <ul className="nav-list headings-list">
                {headings.map(heading => (
                  <li 
                    key={heading.id} 
                    className={`heading-level-${heading.level}`}
                    onClick={() => scrollToHeading(heading.id)}
                  >
                    <button type="button" className="heading-link">
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavigationBox;