import { colleagues, friends } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

function allOlder(friendsArray: Friend[]): string[] {
  return friendsArray.map((friend) => older(friend));
}

// console.log(older(friends[0]));

// console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));
