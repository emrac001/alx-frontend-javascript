interface Teacher {
  firstName: string; // can only be set when initialized
  lastName: string; // can only be set when initialized
  fullTimeEmployee: boolean; // always required
  yearsOfExperience?: number; // optional
  location: string; // always required
  [key: string]: any; // allows extra properties like contract
}

// Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'Abuja',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
