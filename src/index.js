import prompt from 'prompt';
import findAliveSolder from './createSolder';

const schema = {
    properties: {
        people: {
        pattern: /^[0-9]*$/,
        message: 'Enter a number',
        required: true
      }
    }
  };

prompt.start();

console.log("Enter a number");

prompt.get(schema, (err, result) => {

    console.log(result.people + " people standing in a circle.");

    let alivePerson =  findAliveSolder(result.people);

    console.log("-------------------------");
    console.log("last alive person ",alivePerson);
    console.log("-------------------------");
  });
