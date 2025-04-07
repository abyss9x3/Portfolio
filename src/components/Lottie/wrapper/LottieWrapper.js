import React from 'react';
import { PropTypes } from 'prop-types';
import withClient from '../../../hoc/withClient';
import { usePrefersReducedMotion } from '@hooks';

const Lottie = React.lazy(() => import('lottie-react'));

/**
 *
 * @param {import('lottie-react').LottieComponentProps} options
 * @returns {JSX.Element}
 * @description A wrapper component for Lottie animations. It uses React.lazy to load the Lottie component only on the client side.
 */
const LottieWrapper = ({ options }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  // If the user prefers reduced motion, don't render the animation
  if (prefersReducedMotion) {
    return null;
  }
  return <Lottie {...options} />;
};

LottieWrapper.propTypes = {
  options: PropTypes.object.isRequired,
};

export default withClient(LottieWrapper);
