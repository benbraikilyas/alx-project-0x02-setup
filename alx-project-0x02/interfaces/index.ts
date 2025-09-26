import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}