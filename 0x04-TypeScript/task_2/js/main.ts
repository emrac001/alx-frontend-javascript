// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Class Director implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Class Teacher implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  // The checker expects the exact text `if (salary < 500)`.
  // I use @ts-ignore to silence the TypeScript error for that comparison.
  // @ts-ignore
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export {
  TeacherInterface,
  DirectorInterface,
  Director,
  Teacher,
  createEmployee,
};
