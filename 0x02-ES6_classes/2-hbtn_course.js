/**
 * A Holberton Course class.
 */
export default class HolbertonCourse {
  /**
   * constructor of @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - The number of months the course is.
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Getter of the attribute name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter of the attribute name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Getter of the attribute length of this course.
   */
  get length() {
    return this._length;
  }

  /**
   * Setter of the attribute length of this course.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (value < 0) {
      throw new Error('Value must be non-negative');
    }
    this._length = value;
  }

  /**
   * Getter of the attribute students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Setter of the attribute students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
