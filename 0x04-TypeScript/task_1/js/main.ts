interface Teacher {
  firstName: string; // can only be set when initialized
  lastName: string; // can only be set when initialized
  fullTimeEmployee: boolean; // always required
  yearsOfExperience?: number; // optional
  location: string; // always required
  [key: string]: any; // allows extra properties like contract
}

// Define Directors interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'Abuja',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define interface for the function
interface printTeacher {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacher = (firstName, lastName) => {
  return '${firstName.charAt(0)}. ${lastName}';
};

// Example usage
console.log(printTeacher("John", "Doe"));
