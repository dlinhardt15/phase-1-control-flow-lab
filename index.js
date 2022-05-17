function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    let message = 'This one is on me!';
    return message
  }
  else if (distance > 400 && distance < 2000) {
    let message = 'That will be twenty bucks.';
    return message;
  }
  else if (distance > 2000 && distance < 2500) {
    let message = 'I will gladly take your thirty bucks.';
    return message;
  }
  else if (distance >= 2500) {
    let message = 'No can do.';
    return message;
  }
  console.log(message);
};

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : "No go."
  }
  

function switchOnCharmFromTip(gratuity){
  let message;
  switch (gratuity) {
    case 'generous':
      message = 'Thank you so much.';
      return message;
    case 'not as generous':
      message = 'Thank you.';
      return message;
    case 'thanks for everything':
      message = 'Bye.';
      return message;
      break;
  }
}