import React from 'react';
import useIsClient from '../hooks/useIsClient';

/**
 * @description A higher-order component that only renders the wrapped component on the client side.
 */
const withClient = WrappedComponent => {
  const WithClient = props => {
    const isClient = useIsClient();

    if (!isClient) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithClient.displayName = `withClient(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;
  return WithClient;
};

export default withClient;
