// Use this cmd: 'npm install dayjs' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import dayjs from 'dayjs';
import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
} from "@ionic/react";
import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

// function formatDate(isoString) {
const formatDate = (isoString) => { // This is the same func also but with arrows (=>) way (ES6)
    return dayjs(isoString).format('D MMM YYYY');
};

// function BiorhythmCard({ targetDate }) {
const BiorhythmCard = ({ birthDate, targetDate }) => { // This is the same func also but with arrows (=>) way (ES6)
    //-- const { X } = Y; => This is an 'Object Distructure (Distructuring)' --> Means that we want to extract properties from 'Y' & Store them on 'X'
    const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);
    return (
        <IonCard className="biorhythm-card ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />  {/* '{birthDate} & {targetDate}' => from the args of' const BiorhythmCard = ({ birthDate, targetDate })' */}
            <p className="physical">Physical: {physical.toFixed(4)}</p>
            <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
            <p className="intellectual">Intellectual: {intellectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
    );
};

export default BiorhythmCard;