function addNewEncounter(encounterName) {
  // if (this.encounters.some(encounter => encounter.name === encounterName)) {
  //   alert("asdf")
  // } else { // if its not already included in favorites
  this.encounters.push({
    name: encounterName,
    id: this.genId(this.encounters),
    imageURL: '',
    partyMembers: [],
    monsters: []
  });
}

function genId(encounters) {
  return encounters.length > 0 ? Math.max(...encounters.map(hero => hero.id)) + 1 : 11;
}

function testFunction() {
  console.log(`the testFunction is called`)
  console.log(`testVariable = ${testVariable}`)
  // testVariable++
}

function increaseTestVar() {
  testVariable++
}

let testVariable = 12;


// deleteEncounter(id: number): void {
//   this.encounters = this.encounters.filter(encounter => encounter.id !== id);
//   this.encountersSubject.next(this.encounters);
// }

// addMemberToEncounter(encounterId: number, level: number) {
//   let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);

//   this.encounters[encounterIdx].partyMembers.push(
//     {
//       level: level,
//       quantity: 1
//     }
//   )
//   this.encountersSubject.next(this.encounters);
// }

// adjustMemberQuantity(encounterId: number, level: number, operation: string): void {
//   let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
//   let memberIdx = this.encounters[encounterIdx].partyMembers.findIndex(member => member.level === level);
//   if (operation == 'increment') {
//     this.encounters[encounterIdx].partyMembers[memberIdx].quantity = this.encounters[encounterIdx].partyMembers[memberIdx].quantity + 1;
//   } else if (operation == 'decrement') {
//     if (1 < this.encounters[encounterIdx].partyMembers[memberIdx].quantity) {
//       this.encounters[encounterIdx].partyMembers[memberIdx].quantity = this.encounters[encounterIdx].partyMembers[memberIdx].quantity - 1;
//     }
//   }
// }

// deleteMember(encounterId: number, level: number): void {
//   let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
//   this.encounters[encounterIdx].partyMembers = this.encounters[encounterIdx].partyMembers.filter(member => member.level != level);
//   this.encountersSubject.next(this.encounters);
// }


// // NOT FINISHED...
// addMonsterToEncounter(encounterId: number, monster: IMonster) {
//   let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
//   console.log(monster.slug)
//   this.encounters[encounterIdx].monsters.push(
//     {
//       slug: monster.slug,
//       name: monster.name,
//       quantity: 1,
//       rating: monster.challenge_rating
//     }
//   )

// }

// adjustMonsterQuantity(encounterId: number, slug: string, operation: string) {
//   let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
//   let monsterIdx = this.encounters[encounterIdx].monsters.findIndex(monster => monster.slug === slug);
//   if (operation === 'increment') {
//     this.encounters[encounterIdx].monsters[monsterIdx].quantity = this.encounters[encounterIdx].monsters[monsterIdx].quantity + 1;
//   } else if (operation == 'decrement') {
//     if (1 < this.encounters[encounterIdx].monsters[monsterIdx].quantity) {
//       this.encounters[encounterIdx].monsters[monsterIdx].quantity = this.encounters[encounterIdx].monsters[monsterIdx].quantity - 1
//     }
//   }
// }

// deleteMonster(encounterId: number, slug: string) {
//   let encounterIdx = this.encounters.findIndex(encounter => encounter.id === encounterId);
//   this.encounters[encounterIdx].monsters = this.encounters[encounterIdx].monsters.filter(monster => monster.slug != slug);
// }




module.exports = {
  testFunction,
  increaseTestVar
}