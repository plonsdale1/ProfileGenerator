const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your Name? Nicknames are cool! ', (answer1) => {
  console.log(`${answer1} is a pretty cool name `);
  rl.question('What activity do you like doing? ', (answer2) => {
    console.log(`Oh, ${answer2} isnt my cup of tea but thats cool`);
    rl.question('What music do you jam to whilst perfoming such activities? ', (answer3) => {
      console.log(`Yeah ${answer3} bumps pretty hard aint gonna lie`);
      rl.question('Which meal time is your favourite? ', (answer4) => {
        console.log(` ${answer4} `);
      rl.question('What is your favourite snack to ruin said meal? ', (answer5) => {
        console.log(` ${answer5} I agree they're Grrrrrrreat!`);
        rl.question('Which sport do you like to eat mcdonalds to and watch?', (answer6) => {
          console.log(`Well, ${answer6} isnt foosball but i guess its a legit sport.`);
          rl.question('If you had a superpower what would it be?', (answer7) => {
            console.log(`Wow! ${answer7} is pretty darn unconventional!`);
            console.log(`${answer1} is my name, i enjoy ${answer2} on the musty shores of the scottish lakes whilst being serenaded by live performances from ${answer3}. If you have the sheer audacity to ask me on a date of my favorite meal time ${answer4}, i will most likely regret to inform you i ate too many ${answer5} as they are my primary source of sustainence. All sports fail miserably in comparison to ${answer6}. My superpower is ${answer7} and i am not hesitant about its usage. Punk.`)
            rl.close();
          });
        });
      });
    });
  });
  });
  
});
