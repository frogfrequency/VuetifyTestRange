// import experienceTable from "../assets/challengeRatingXPTable"

let  experienceTable  = require("../assets/challengeRatingXPTable");


function function1() {
  console.log(experienceTable)
}

function function2() {
  console.log('SECOND Function')
}

function extractSpeed(speedRaw) { // input should of type ISpeed... but it's a bit tricky to make accessing the props work
  const modesOfMovement = ['Burrow', 'Climb', 'Fly', 'Swim', 'Walk']
  let speedString = ''

  modesOfMovement.forEach(mode => {
    if (speedRaw.hasOwnProperty(mode.toLowerCase())) {
      let newMode = `${mode}: ${speedRaw[mode.toLowerCase()]}ft, `
      speedString += newMode;
    }
  })
  if (speedRaw.hasOwnProperty('hover')) { // adding hover at the end if present
    speedString += 'Hover, '
  }
  if (speedString.charAt(speedString.length - 2) === ',') { // removing comma at the end
    speedString = speedString.slice(0, speedString.length - 2)
  }
  return speedString
}

function extractAbilityScores(monster) {
  let abilityNames = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
  let output = []
  abilityNames.forEach(ability => {
    if (monster[ability]) {

      let modifier = Math.floor((monster[ability] - 10) / 2);
      let modifierString = JSON.stringify(modifier);
      if (0 <= modifier) {
        modifierString = '+' + modifier;
      }

      let savingThrowModifier = monster[ability + '_save'];
      if (!savingThrowModifier) {
        savingThrowModifier = modifier;
      }

      let savingThrowModifierString;

      if (0 <= savingThrowModifier) {
        savingThrowModifierString = '+' + JSON.stringify(savingThrowModifier)
      } else {
        savingThrowModifierString = '-' + JSON.stringify(savingThrowModifier)
      }

      output.push([ability.slice(0, 3).toUpperCase(), JSON.stringify(monster[ability]), modifierString, savingThrowModifierString]);
    }
  })
  return output
}

function extractSkills(skills) {

  const allSkills = [
    'Athletics',
    'Acrobatics',
    'Stealth',
    'Arcana',
    'History',
    'Investigation',
    'Nature',
    'Religion',
    'Insight',
    'Medicine',
    'Perception',
    'Survival',
    'Deception',
    'Intimidation',
    'Performance',
    'Persuasion',
  ]
  let skillsString = '';

  allSkills.forEach(skill => {
    if (skills.hasOwnProperty(skill.toLowerCase())) {
      let skillValue = skills[skill.toLowerCase()];
      let newSkill;
      if (0 <= skillValue) {
        newSkill = `${skill}: +${skills[skill.toLowerCase()]}, `
      } else {
        newSkill = `${skill}: -${skills[skill.toLowerCase()]}, `
      }
      skillsString += newSkill;
    }
  })

  if (skillsString.charAt(skillsString.length - 2) === ',') { // removing comma at the end
    skillsString = skillsString.slice(0, skillsString.length - 2)
  }
  return skillsString
}

function extractChallengeRating(monster) {
  let xpTable = experienceTable;
  let challengeRating = monster.challenge_rating;
  let xpString = JSON.stringify(xpTable[challengeRating]);
  for (let i = xpString.length - 3; 0 < i; i = i - 3) {
    xpString = xpString.slice(0, i) + `'` + xpString.slice(i);
    // xpString = xpString + 'x'
  }
  return `${challengeRating} (${xpString} XP)`
}

function extractNameDescPairs(pairObject) {
  if (pairObject === "") {
    return []
  }
  let outputArr = []
  pairObject.forEach( (element) => {
    let pair = [element.name, element.desc]
    outputArr.push(pair);
  })
  return outputArr
}




module.exports = {
  function1,
  function2,
  extractSpeed,
  extractAbilityScores,
  extractSkills,
  extractChallengeRating,
  extractNameDescPairs
}