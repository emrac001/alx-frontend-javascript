interface Teacher {
  readonly firstName: string; // can only be set when initialized
  readonly lastName: string; // can only be set when initialized
  fullTimeEmployee: boolean; // always required
  yearsOfExperience?: number; // optional
  location: string; // always required
  [key: string]: any; // allows extra properties like contract
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'Abuja',
  contract: false, // extra property
};

console.log(teacher3);
