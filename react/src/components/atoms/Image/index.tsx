import styles from './styles.module.css'
import { ClassNameUtils } from '../../../common/utils/ClassNameUtils.ts'
import { Component } from '../../../common/types/Component.ts'

interface ImageProps extends Component {
  /**
   * The path to the image
   */
  source: string
  /**
   * Width of the Image
   */
  width?: number
  /**
   * Height of the Image
   */
  height?: number
  /**
   * Optional click handler
   */
  onClick?: () => void
}

export const Image = ({ source, className, ...props }: ImageProps) => {
  return <img src={source} className={[styles.image, ...ClassNameUtils.convert(className)].join(' ')} {...props}></img>
}
