import React from 'react';

/**
 * Adds Google Analytics to your web application. This must be used in the Head component of _document.
 * @param {object} props
 * @param {string} props.analyticsId
 * @returns
 */
function GoogleAnalytics({ analyticsId }) {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analyticsId}', {
                  page_path: window.location.pathname + window.location.search || '',
                });
              `,
        }}
      />
    </>
  );
}

GoogleAnalytics.propTypes = {};

export default GoogleAnalytics;
