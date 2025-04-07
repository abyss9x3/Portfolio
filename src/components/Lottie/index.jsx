import React from 'react';
import LottieWrapper from './wrapper/LottieWrapper';
import { FullStackAnimationData, ContactAnimationData, HeroAnimationData } from '../../assets';

export const HeroAnimation = () => <LottieWrapper options={{
  animationData: HeroAnimationData,
  loop: true,
  autoplay: true,
  style: { width: '100%', height: '100%' },
}} />;

export const AboutAnimation = () => <LottieWrapper options={{
  animationData: HeroAnimationData,
  loop: true,
  autoplay: true,
}} />;

export const ContactAnimation = () => <LottieWrapper options={{
  animationData: ContactAnimationData,
  loop: true,
  autoplay: true,
}} />;

export const WhatIDoAnimation = () => <LottieWrapper options={{
  animationData: FullStackAnimationData,
  loop: true,
  autoplay: true,
}} />;

export const Animation = () => <LottieWrapper options={{
  animationData: AnimationData,
  loop: true,
  autoplay: true,
}} />;
