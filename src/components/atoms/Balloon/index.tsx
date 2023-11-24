import styles from './styles.module.css';
import {ClassNameUtils} from "../../../common/utils/ClassNameUtils.ts";
import {Component} from "../../../common/types/Component.ts";

interface BalloonProps extends Component {
  /**
   * The text shown in the component
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for tool tip
 */
export const Balloon = ({label, className, ...props}: BalloonProps) => {
  return (
    <span className={[styles.balloon, ...ClassNameUtils.convert(className)].join(' ')}
          {...props}
    >
      {label}
    </span>
  );
};