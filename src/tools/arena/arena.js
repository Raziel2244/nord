import { LabelledInput, Tool } from "../../components";
import { useStack, useChecked, useSelectedIndex } from "../../hooks";
import "./arena.css";

const dragonLevels = [
  { name: "Beginner", reward: 50, chance: 95 },
  { name: "Level 1", reward: 100, chance: 85 },
  { name: "Level 2", reward: 250, chance: 70 },
  { name: "Level 3", reward: 500, chance: 55 },
  { name: "Level 4", reward: 1000, chance: 40 },
  { name: "Level 5", reward: 2000, chance: 25 },
  { name: "Level 6", reward: 3000, chance: 10 },
];

const horseLevels = [
  { name: "No registered level" },
  { name: "Basic training" },
  { name: "Quality blood" },
  { name: "Excellent blood" },
  { name: "Supreme blood" },
  { name: "Heroic blood" },
  { name: "Legendary blood" },
];

const trustLevels = [
  { name: "0%" },
  { name: "30%" },
  { name: "70%" },
  { name: "100%" },
];

const baitLevels = [
  { name: "0" },
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
];

const itemList = [
  { name: "Sneak-O-Matic", group: "barracks", count: 3 },
  { name: "Time travel token", group: "barracks", count: 3 },
  { name: "Enchanted armour", group: "barracks", count: 1 },
  { name: "Enchanted sword", group: "barracks", count: 3 },
  { name: "Hound familiar", group: "barracks", count: 1 },
  { name: "Battle cry buff", group: "barracks", count: 3 },
  { name: "Live bait x30", group: "barracks", count: 3 },
  { name: "Energy boost", group: "barracks", count: 3 },

  { name: "RNG trait", group: "bazaar", count: 5 },
  { name: "Roaning triturate", group: "bazaar", count: 5 },
  { name: "+1 mutation slot", group: "bazaar", count: 5 },
  { name: "+1 natural slot", group: "bazaar", count: 5 },
  { name: "Luck potion 1", group: "bazaar", count: 5 },
  { name: "Luck potion 2", group: "bazaar", count: 5 },
  { name: "Potion choice", group: "bazaar", count: 5 },
  { name: "Semi custom import", group: "bazaar", count: 2 },
  { name: "A touch of glimmer", group: "bazaar", count: 1 },
  { name: "Future glimpse", group: "bazaar", count: 1 },
  {
    name: "Pretty plump pumpkin",
    group: "barracks",
    count: 1,
    season: [9, 10, 11],
  },
  {
    name: "Glass full of eggnog",
    group: "barracks",
    count: 1,
    season: [1, 11, 12],
  },
];

const month = new Date().getMonth() + 1;

function cacheReducer(cache, item) {
  if (item?.season && !item.season.includes(month)) return cache;

  const all = cache.all || [];
  const group = cache[item.group] || [];

  for (let i = 0; i < item.count; i++) {
    all.push(item);
    group.push(item);
  }

  cache.all = all;
  cache[item.group] = group;

  return cache;
}

const cache = itemList.reduce(cacheReducer, {});

const optionMapper = ({ name }, idx) => (
  <option key={idx} value={idx}>
    {name}
  </option>
);

const listMapper = (v) => <div key={v}>{v}</div>;

const rng = (cap) => Math.floor(Math.random() * cap) + 1;

export function Arena() {
  const [dragon, setDragon] = useSelectedIndex(0);
  const [horse, setHorse] = useSelectedIndex(0);
  const [battleCry, setBattleCry] = useChecked(false);
  const [dragonDrawn, setDragonDrawn] = useChecked(false);
  const [armour, setArmour] = useChecked(false);
  const [weapon, setWeapon] = useChecked(false);
  const [energy, setEnergy] = useChecked(false);
  const [sneak, setSneak] = useChecked(false);
  const [hound, setHound] = useChecked(false);
  const [trust, setTrust] = useSelectedIndex(0);
  const [bait, setBait] = useSelectedIndex(0);
  const [output, pushOutput, setOutput] = useStack();
  const [stats, pushStats, setStats] = useStack();

  let defeated = false;

  function rollItem(group = "all") {
    const items = cache[group];
    return items[rng(items.length)];
  }

  function handleRoll() {
    setOutput();
    setStats();

    if (horse < dragon) return;

    if (sneak) handleSneak();
    if (battleCry) handleBattleCry();
    if (!defeated) handleBattle();

    if (defeated) {
      const { reward } = dragonLevels[dragon];
      pushOutput(`__ is victorious! They bring home ${reward}AG`);
    } else {
      pushOutput(
        "Unfortunately, __ was unsuccessful in their hunt, better luck next time!"
      );
    }

    handleCache();
  }

  function handleSneak() {
    const [cap, chance] = [100, 50];
    const roll = rng(cap);

    pushStats(`Sneak > Chance: ${chance} Roll: ${roll}`);

    if (roll <= chance) {
      const { name } = rollItem();
      pushOutput(`__ sneaks past the dragon and steals ${name}`);
    } else {
      pushOutput("__ failed to sneak past the dragon");
    }
  }

  function handleBattleCry() {
    const [cap, chance] = [100, 15];
    const roll = rng(cap);

    pushStats(`Cry > Chance: ${chance} Roll: ${roll}`);

    defeated = roll <= chance;
    if (defeated) pushOutput("Your ferocious battle cry scared off the dragon");
  }

  function handleBattle() {
    const cap = 100;
    const roll = rng(cap);

    const advantage = horse + (energy ? 1 : 0) - dragon;
    let { chance } = dragonLevels[dragon];
    if (advantage > 0) chance += advantage * 15; // boost per level advantage
    if (dragonDrawn) chance += 10; // boost for drawing dragon
    if (armour) chance += 20; // boost for armour
    if (weapon) chance += 10; // boost for weapon
    if (armour && weapon) chance += 15; // boost for combo
    chance += bait * 5; // boost for bait

    console.log({ advantage, horse, energy, dragon });

    pushStats(`Battle > Chance: ${chance} Roll: ${roll}`);

    defeated = roll <= chance;
  }

  function handleCache() {
    const [cap, bonus] = [5000, 250];
    const chance = hound ? (trust + 1) * bonus : 2;
    const roll = rng(cap);

    pushStats(`Cache > Chance: ${chance} Roll: ${roll}`);

    if (roll < chance) {
      const { name: name1 } = rollItem("barracks");
      const { name: name2 } = rollItem("bazaar");
      pushOutput(
        `What’s this? You found a supply cache! It contained 1500AG, ${name1} and ${name2}`
      );
    } else {
      pushOutput("No cache found");
    }
  }

  return (
    <Tool
      name="arena"
      title="Arena Roller"
      handleRoll={handleRoll}
      output={output.map(listMapper)}
      stats={stats.map(listMapper)}
    >
      <div className="row">
        <LabelledInput
          id="dragon"
          label="Dragon:"
          type="select"
          value={dragon}
          onChange={setDragon}
        >
          {dragonLevels.map(optionMapper)}
        </LabelledInput>
        <LabelledInput
          id="horse"
          label="Horse:"
          type="select"
          value={horse}
          onChange={setHorse}
        >
          {horseLevels.map(optionMapper)}
        </LabelledInput>
      </div>
      <div className="row">
        <LabelledInput
          id="battleCry"
          label="Battle cry:"
          type="checkbox"
          checked={battleCry}
          onChange={setBattleCry}
        />
        <LabelledInput
          id="dragonDrawn"
          label="Dragon drawn:"
          type="checkbox"
          checked={dragonDrawn}
          onChange={setDragonDrawn}
        />
        <LabelledInput
          id="armour"
          label="Enchanted armour:"
          type="checkbox"
          checked={armour}
          onChange={setArmour}
        />
        <LabelledInput
          id="weapon"
          label="Enchanted weapon:"
          type="checkbox"
          checked={weapon}
          onChange={setWeapon}
        />
      </div>
      <div className="row">
        <LabelledInput
          id="energy"
          label="Energy boost:"
          type="checkbox"
          checked={energy}
          onChange={setEnergy}
        />
        <LabelledInput
          id="sneak"
          label="Sneak-O-Matic:"
          type="checkbox"
          checked={sneak}
          onChange={setSneak}
        />
        <LabelledInput
          id="hound"
          label="Hound familiar:"
          type="checkbox"
          checked={hound}
          onChange={setHound}
        />
        <LabelledInput
          id="trust"
          label="Hound trust:"
          type="select"
          value={trust}
          onChange={setTrust}
        >
          {trustLevels.map(optionMapper)}
        </LabelledInput>
        <LabelledInput
          id="bait"
          label="Live bait:"
          type="select"
          value={bait}
          onChange={setBait}
        >
          {baitLevels.map(optionMapper)}
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
