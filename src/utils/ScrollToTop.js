import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ScrollToTop({ history, children }) {
  useEffect(() => {
      console.log(history,":;;;")
    // eslint-disable-next-line react/prop-types
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <>{children}</>;
}

export default withRouter(ScrollToTop); 