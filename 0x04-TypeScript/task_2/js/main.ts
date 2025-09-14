// Interfaces
export interface TeacherInterface {
  workTeacherTasks(): string;
}

export interface DirectorInterface {
  workDirectorTasks(): string;
}

// Classes
export class Teacher implements TeacherInterface {
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export class Director implements DirectorInterface {
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// createEmployee function
export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// isDirector function (type predicate)
export function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

// executeWork function
export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// String literal type
export type Subjects = 'Math' | 'History';

// teachClass function
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
