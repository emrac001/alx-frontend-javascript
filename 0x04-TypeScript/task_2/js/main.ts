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

// Type predicate
export function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork function
export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
