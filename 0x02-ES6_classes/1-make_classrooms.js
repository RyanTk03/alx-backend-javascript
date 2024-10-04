import ClassRoom from './0-classroom.js';

/**
 * Initialize three class rooms.
 *
 * Returns an array of 3 ClassRoom objects with the sizes 19, 20, and 34.
 */
export default function initializeRooms () {
  const classrooms = [];
  const numbers = [19, 20, 34];

  for (let i = 0; i < 3; i++) {
    classrooms.push(new ClassRoom(numbers[i]));
  }

  return classrooms;
}
