import styles from './styles.module.css';

interface BalloonProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Balloon = ({...props}: BalloonProps) => {
  return (
    <span className={styles.balloon} {...props}>
      削除
    </span>
  );
};