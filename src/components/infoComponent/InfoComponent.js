import { useState, useEffect, useRef } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import BikeService from "../../services/FormList.service";
import FormListService from "../../services/FormList.service";
// import "./BikeList.css";
function InfoList() {
    const [Info, setInfo] = useState([]);
    const refForm = useRef();
  
    const getAllInfo = () => {
      FormListService.getAllInfo()
        .then((items) => {
          let allInfo = [];
          items.forEach(item => {
            const key = item.key;
            const data = item.val();
            allBikes.push({
              key: key,
              bedtime: bedtime,
              observations: observations,
              sleepDuration: sleepDuration,
              sport: sport,
              thermalSensation: thermalSensation,
              wakeupTime: wakeupTime,
            });
          });
          setInfo([...allInfo]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
}  
    export default InfoList;