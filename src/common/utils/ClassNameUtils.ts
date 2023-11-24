import {ClassName} from "../types/ClassName.ts";

export class ClassNameUtils {
  public static convert(className?: ClassName) {
    if (!className) { // undefined
      return []
    }

    if (typeof className == 'string') { // string
      return [className]
    }

    return className // list
  }
}