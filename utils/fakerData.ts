const { faker } = require('@faker-js/faker');

export function createRandomUser() {
  return {
    firstName:faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    number: faker.phone.number(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
