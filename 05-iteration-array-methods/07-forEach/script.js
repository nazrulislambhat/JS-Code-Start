//High order array methods
const socials = ['Instagram', 'Facebook', 'Youtube', 'Twitter'];

socials.forEach((social) => {
  console.log(social); //will run 4 times in this case becasue we have 4 items in the arrayb for each element it will run once
  console.log(social[0]); //will run everytime time for each element & will display 0th element of all 4 letters
  console.log(social[social.length - 1]); //will run everytime time for each element & will display last element of all 4 items in the array
});

//The primary advantage of using forEach over a simple for loop is that it is more concise and can make your code more readable. Additionally, forEach also works well with callback functions, making it a popular choice for working with asynchronous code.

//passing a named function
function logSocials(social) {
  console.log(social);
}
socials.forEach(logSocials);
