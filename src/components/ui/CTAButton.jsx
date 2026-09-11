import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CTAButton.module.css';

export default function CTAButton({
  children,
  to = '/auditoria',
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'sage'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  className = '',
  onClick,
  ...props
}) {
  const classNames = [
    styles.btn,
    styles[variant],
    styles[size],
    className
  ].filter(Boolean).join(' ');

  if (to && !onClick) {
    return (
      <Link to={to} className={classNames} {...props}>
        <span>{children}</span>
        {Icon && <Icon className={styles.icon} size={size === 'lg' ? 20 : 18} />}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classNames} {...props}>
      <span>{children}</span>
      {Icon && <Icon className={styles.icon} size={size === 'lg' ? 20 : 18} />}
    </button>
  );
}
