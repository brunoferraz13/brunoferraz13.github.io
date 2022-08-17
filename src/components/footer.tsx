import * as React from 'react';

function Footer() {
  return (
    <>
      <footer className="footer padding">
        <div className="content has-text-centered">
            <p>
                Copyright © {new Date().getFullYear()} MCN
            </p>
        </div>
    </footer>
    </>
  );
}

export default Footer;