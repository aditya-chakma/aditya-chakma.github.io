import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = 'Aditya::Portfolio';
    let pageTitle = baseTitle;

    // Add specific page titles based on route
    switch (location.pathname) {
      case '/':
        pageTitle = baseTitle;
        break;
      case '/skills':
        pageTitle = `Skills | ${baseTitle}`;
        break;
      case '/projects':
        pageTitle = `Projects | ${baseTitle}`;
        break;
      case '/education':
        pageTitle = `Education | ${baseTitle}`;
        break;
      case '/certifications':
        pageTitle = `Certifications & Achievements | ${baseTitle}`;
        break;
      case '/contact':
        pageTitle = `Contact | ${baseTitle}`;
        break;
      default:
        pageTitle = baseTitle;
    }

    document.title = pageTitle;
  }, [location]);

  return null;
};

export default DocumentTitle; 