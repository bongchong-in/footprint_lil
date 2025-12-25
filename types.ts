import React from 'react';

export interface HeroStatCard {
  label: string;
  value: string;
  icon: React.ReactNode;
  bgClass: string;
  textClass: string;
}

export interface Attribute {
  label: string;
  value: number;
  color: string;
  icon: React.ReactNode;
}

export interface GalleryItem {
  id: number;
  type: string;
  title: string;
  img: string;
  desc: string;
  tags: string[];
  link: string;
}

export interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
