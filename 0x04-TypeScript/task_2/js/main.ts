// Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
}

// Director interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Function returning work string for Director
function workDirectorTasks(): string {
  return 'Getting to director tasks';
}

// Function returning work string for Teacher
function workTeacherTasks(): string {
  return 'Getting to work';
}

// Create employee function (from Task 5 context)
function createEmployee(salary: number | string): Teacher | Directors {
  if (typeof salary === 'number' && salary < 500) {
    return {
      firstName: 'John',
      lastName: 'Doe',
      location: 'Abuja',
      fullTimeEmployee: true,
    } as Teacher;
  } else {
    return {
      firstName: 'Jane',
      lastName: 'Smith',
      location: 'Lagos',
      fullTimeEmployee: true,
      numberOfReports: 10,
    } as Directors;
  }
}

// Type predicate to check if employee is a Director
function isDirector(employee: Teacher | Directors): employee is Directors {
  return (employee as Directors).numberOfReports !== undefined;
}

// Function executeWork
function executeWork(employee: Teacher | Directors): string {
  if (isDirector(employee)) {
    return workDirectorTasks();
  }
  return workTeacherTasks();
}

// Example usage
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
