import db from "../components/firebaseConfig/firebase.js";
import { ref, get, remove, push } from "firebase/database";
const dbRef = ref(db, "/registers");

const getAllInfo = () => {
  return get(dbRef);
};

const addInfo = (bedtime, day, observations, sleepDuration, sport, thermalSensation, wakeupTime    ) => {
  return push(dbRef, {
    bedtime: bedtime,
    observations: observations,
    sleepDuration: sleepDuration,
    sport: sport,
    thermalSensation: thermalSensation,
    wakeupTime: wakeupTime,
  });
};

const removeInfo = (key) => {
  const dbRefInfo = ref(db, `/registers/${key}`);
  return remove(dbRefInfo);
};

export default {
    getAllInfo,
    addInfo,
    removeInfo,
};
