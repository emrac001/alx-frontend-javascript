## Project Overview
This project is part of the **ALX Frontend JavaScript - TypeScript module**.  
The goal is to define and work with a **TypeScript interface** for a Teacher object.

The Teacher interface includes:
- firstName (string) – readonly  
- lastName (string) – readonly  
- fullTimeEmployee (boolean) – required  
- yearsOfExperience (number) – optional  
- location (string) – required  
- Ability to add any extra attributes (e.g., contract: boolean) without being predefined.

Example:

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'Abuja',
  contract: false,
};

console.log(teacher3);
