function scuberGreetingForFeet(distance){
  let greeting;

  if (distance <= 400) {
    greeting = 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    greeting = 'No can do.';
  }

  return greeting;
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  let greeting;
  
  switch (tip) {
    case "generous":
      greeting = "Thank you so much.";
      break;
    case 'not as generous':
      greeting = 'Thank you.';
      break;
    default:
      greeting = 'Bye.';
  }

  return greeting;
}