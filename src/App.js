// Use this cmd: 'npm install @ionic/react' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
  IonFooter
  //IonTabBar
  // IonInput,
  // IonCard,
  // IonCardHeader,
  // IonCardTitle,
  // IonCardContent,
} from '@ionic/react';
// 'useState' => Allows us to manage 'State & Functional Components'
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';

function App() {
  //-- 'useState' => Allows us to manage 'State & Functional Components'
  // const[name, setName] = useState(''); // initial value = ''
  const[birthDateProps, setBirthDateProps] = useLocalStorage('birthDate', ''); // useState(''); //-- initial value = ''
  const [targetDateProps, setTargetDateProps] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position="floating">Name:</IonLabel>  // '<IonLabel/>' == '<label/>' on 'HTML#5' 
          <IonInput value={name} 
                    onIonChange={(event) => setName(event.detail.value) } // 'onIonChange' == 'onChange' on 'HTML#5'  
                    // placeholder="Your Name" 
          /> // '<IonInput/>' == '<input/>' on 'HTML#5'
        </IonItem> */}

        {/* 'targetDateProps/birthDateProps' => props to be passed as a 'targetDate/birthDate' args on ['BiorhythmCard.js'] file */}   
        {birthDateProps && <BiorhythmCard birthDate={birthDateProps} targetDate={targetDateProps} /> } {/* ==== {birthDateProps ? <BiorhythmCard ... /> : null} */}
        <IonItem>
          <IonLabel position="floating">Date of Birth:</IonLabel>  {/* '<IonLabel/>' == '<label/>' on 'HTML#5' */}
          <IonDatetime displayFormat="D MMM YYYY"
                       value={birthDateProps}
                       onIonChange= {(event) => setBirthDateProps(event.detail.value) } // 'onIonChange' == 'onChange' on 'HTML#5'
          /> {/* '<IonDatetime/>' == '<Datetime/>' on 'HTML#5' */}
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Target Date:</IonLabel>  {/* '<IonLabel/>' == '<label/>' on 'HTML#5' */}
          <IonDatetime displayFormat="D MMM YYYY"
                       value={targetDateProps}
                       onIonChange= {(event) => setTargetDateProps(event.detail.value) } // 'onIonChange' == 'onChange' on 'HTML#5'
          /> {/* '<IonDatetime/>' == '<Datetime/>' on 'HTML#5' */}
        </IonItem>

          {/* As we tape on the '<IonInput/>' using the 'onIonChange' => <p/> will receive the taped Name immediatelly */}
          {/* <p>Name: {name}</p>
          <p>Date of Birth: {birthDate}</p> */}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle className="ion-padding">
            <p style={{'fontSize': '12.5px', 'fontWeight': 'bold'}}>Copyright Ⓒ 2020 - Walid ZHANI</p>
          </IonTitle>
        </IonToolbar>       
      </IonFooter>
    </IonApp>
  );
}

export default App;