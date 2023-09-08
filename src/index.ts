/**
 * Problem:
 * Define a type Person with properties - name (string), age (number)
 * Write a function that takes array of Person objects and return the persons with age less than 10.
 */

type Person = {
  name: string;
  age?: number;
};

function printPerson(p: Person[]): Person[] {
  return p.filter(({ age }: Person) => (age ? age < 10 : false));
}

/** DO NOT REMOVE MAIN FUNCTION **/

/* Start program execution: Call your starting method inside main */
export function main(testParam: Person[]): Person[] {
  const result = printPerson(testParam);
  return result;
}
