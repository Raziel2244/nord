import { LabelledInput, Tool } from "../../components";
import { useTargetChecked, useTargetValue } from "../../hooks";
import "./arena.css";

const dragonLevels = [
  { level: 0, title: "Beginner", reward: 50, chance: 95 },
  { level: 1, title: "Level 1", reward: 100, chance: 85 },
  { level: 2, title: "Level 2", reward: 250, chance: 70 },
  { level: 3, title: "Level 3", reward: 500, chance: 55 },
  { level: 4, title: "Level 4", reward: 1000, chance: 40 },
  { level: 5, title: "Level 5", reward: 2000, chance: 25 },
  { level: 6, title: "Level 6", reward: 3000, chance: 10 },
];

const horseLevels = [
  { level: 0, title: "No registered level" },
  { level: 1, title: "Basic training" },
  { level: 2, title: "Quality blood" },
  { level: 3, title: "Excellent blood" },
  { level: 4, title: "Supreme blood" },
  { level: 5, title: "Heroic blood" },
  { level: 6, title: "Legendary blood" },
];

const trustLevels = [
  { level: 0, title: "0%" },
  { level: 1, title: "30%" },
  { level: 2, title: "70%" },
  { level: 3, title: "100%" },
];

const baitLevels = [
  { level: 0, title: "0" },
  { level: 1, title: "1" },
  { level: 2, title: "2" },
  { level: 3, title: "3" },
  { level: 4, title: "4" },
  { level: 5, title: "5" },
];

export function Arena() {
  const [dragon, setDragon] = useTargetValue(0);
  const [horse, setHorse] = useTargetValue(0);
  const [battleCry, setBattleCry] = useTargetChecked(false);
  const [dragonDrawn, setDragonDrawn] = useTargetChecked(false);
  const [armour, setArmour] = useTargetChecked(false);
  const [weapon, setWeapon] = useTargetChecked(false);
  const [energy, setEnergy] = useTargetChecked(false);
  const [sneak, setSneak] = useTargetChecked(false);
  const [hound, setHound] = useTargetChecked(false);
  const [trust, setTrust] = useTargetValue(0);
  const [bait, setBait] = useTargetValue(0);

  const mapSelectOptions = (item) => (
    <option key={item.level} value={item.level}>
      {item.title}
    </option>
  );

  function handleRoll(e) {
    e.preventDefault();
    console.log({
      dragon,
      horse,
      battleCry,
      dragonDrawn,
      armour,
      weapon,
      energy,
      sneak,
      hound,
      trust,
      bait,
    });
  }

  return (
    <Tool name="arena" title="Arena Roller" onSubmit={handleRoll}>
      <div className="row">
        <LabelledInput
          id="dragon"
          label="Dragon:"
          type="select"
          value={dragon}
          onChange={setDragon}
        >
          {dragonLevels.map(mapSelectOptions)}
        </LabelledInput>
        <LabelledInput
          id="horse"
          label="Horse:"
          type="select"
          value={horse}
          onChange={setHorse}
        >
          {horseLevels.map(mapSelectOptions)}
        </LabelledInput>
      </div>
      <div className="row">
        <LabelledInput
          id="battleCry"
          label="Battle cry:"
          type="checkbox"
          value={battleCry}
          onChange={setBattleCry}
        />
        <LabelledInput
          id="dragonDrawn"
          label="Dragon drawn:"
          type="checkbox"
          value={dragonDrawn}
          onChange={setDragonDrawn}
        />
        <LabelledInput
          id="armour"
          label="Enchanted armour:"
          type="checkbox"
          value={armour}
          onChange={setArmour}
        />
        <LabelledInput
          id="weapon"
          label="Enchanted weapon:"
          type="checkbox"
          value={weapon}
          onChange={setWeapon}
        />
      </div>
      <div className="row">
        <LabelledInput
          id="energy"
          label="Energy boost:"
          type="checkbox"
          value={energy}
          onChange={setEnergy}
        />
        <LabelledInput
          id="sneak"
          label="Sneak-O-Matic:"
          type="checkbox"
          value={sneak}
          onChange={setSneak}
        />
        <LabelledInput
          id="hound"
          label="Hound familiar:"
          type="checkbox"
          value={hound}
          onChange={setHound}
        />
        <LabelledInput
          id="trust"
          label="Hound trust:"
          type="select"
          value={trust}
          onChange={setTrust}
        >
          {trustLevels.map(mapSelectOptions)}
        </LabelledInput>
        <LabelledInput
          id="bait"
          label="Live bait:"
          type="select"
          value={bait}
          onChange={setBait}
        >
          {baitLevels.map(mapSelectOptions)}
        </LabelledInput>
      </div>
      <div className="row">
        <button id="roll" type="submit">
          Roll
        </button>
      </div>
    </Tool>
  );
}

export default Arena;
