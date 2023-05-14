import db from "../components/firebaseConfig/firebase.js";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/registers");

const getAllRegisters = () => {
  return get(dbRef);
};

const addRegister = (
  day,
  bedtime,
  wakeupTime,
  sleepDuration,
  sport,
  thermanSensation,
  observations
) => {
  return push(dbRef, {
    day: day,
    bedtime: bedtime,
    wakeupTime: wakeupTime,
    sleepDuration: sleepDuration,
    sport: sport,
    thermanSensation: thermanSensation,
    observations: observations,
  });
};

const removeRegister = (key) => {
  const dbRefRegister = ref(db, `/registers/${key}`);
  return remove(dbRefRegister);
};

export default {
  getAllRegisters,
  addRegister,
  removeRegister,
};
