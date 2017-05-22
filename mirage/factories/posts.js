/*
 This is an example factory definition.

 Create more files in this directory to define additional factories.
 */
import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({

  // title() { return faker.name.firstName(); },
  title(i) {//
    return faker.list.cycle('Economics', 'Philosophy', 'English', 'History', 'Mathematics',
      'Science', 'Art', 'Sports', 'Geography', 'Algebra')(i);
  },
//
  /*
   title(i)
   {
   // and functions
   return faker.list.cycle('Economics', 'Philosophy', 'English', 'History', 'Mathematics',
   'Science', 'Art', 'Sports', 'Geography', 'Algebra')(i) + " by " + faker.name.firstName()
   + " " + faker.name.lastName();
   },*/
  //title() { return faker.hacker.phrase(); },
  text() { return faker.lorem.sentence() + " abcde"; }

//	title: faker.hacker.phrase,
//	text: faker.lorem.sentence
});
