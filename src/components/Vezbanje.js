import React from 'react';
import './Vezbanje.css';

function Vezbanje() {
  const exercises = [
    {
      id: 1,
      title: 'Sklekovi (Push-ups)',
      difficulty: 'Početnik',
      muscles: 'Grudi, Ramena, Triceps',
      description: 'Sklekovi su osnovna vežba za gornji deo tela koja se može raditi bilo gde. Počnite sa koljenima na podu ako ste početnik.',
      steps: [
        'Započnite u plank poziciji sa rukama malo šire od ramena',
        'Spustite telo dok grudi ne budu blizu poda',
        'Potisnite nazad do početne pozicije',
        'Ponovite 10-15 puta'
      ]
    },
    {
      id: 2,
      title: 'Čučnjevi (Squats)',
      difficulty: 'Početnik',
      muscles: 'Kvadriceps, Zadnjica, Butine',
      description: 'Čučnjevi su najbolja vežba za donji deo tela. Ciljaju više mišićnih grupa odjednom.',
      steps: [
        'Stojte sa stopalima širine ramena',
        'Spustite se kao da sedate na stolicu',
        'Idite dole dok bedra ne budu paralelna sa podom',
        'Podignite se nazad i ponovite 15-20 puta'
      ]
    },
    {
      id: 3,
      title: 'Planki (Planks)',
      difficulty: 'Srednji',
      muscles: 'Trbuh, Ramena, Ledja',
      description: 'Planki su odlična vežba za jačanje core mišića. Počnite sa 20 sekundi i građajte vreme.',
      steps: [
        'Započnite u push-up poziciji',
        'Spustite se na podlaktice',
        'Držite telo u pravoj liniji',
        'Zadržite 30-60 sekundi'
      ]
    },
    {
      id: 4,
      title: 'Burpee',
      difficulty: 'Napredni',
      muscles: 'Celo telo',
      description: 'Burpee je jedna od najzahtevnijih bodyweight vežbi koja trenira celo telo i kardio sistem.',
      steps: [
        'Započnite stojeći',
        'Spustite se u čučanj i stavite ruke na pod',
        'Iskoraknite noge nazad u plank poziciju',
        'Napravite sklek, zatim skočite nazad u čučanj',
        'Skočite uvis sa rukama iznad glave'
      ]
    },
    {
      id: 5,
      title: 'Hip Thrusts',
      difficulty: 'Srednji',
      muscles: 'Zadnjica, Butine, Donji deo ledja',
      description: 'Odlična vežba za jačanje zadnjice i posteriornog lanca. Možete raditi sa ili bez tegovima.',
      steps: [
        'Lezite na podu sa koljenima savijenim i stopalima na podu',
        'Podignite zadnjicu i donji deo ledja do formiranja prave linije',
        'Zadržite 2 sekunde na vrhu',
        'Spustite se polako i ponovite 12-15 puta'
      ]
    },
    {
      id: 6,
      title: 'Mountain Climbers',
      difficulty: 'Srednji',
      muscles: 'Trbuh, Ramena, Noge',
      description: 'Dinamična vežba koja kombinuje cardio i jačanje core-a.',
      steps: [
        'Započnite u plank poziciji',
        'Brzo pomerajte kolena napred-nazad alternativno',
        'Držite trbuh zategnut i telo u pravoj liniji',
        'Radite 30-60 sekundi'
      ]
    }
  ];

  return (
    <div className="vezbanje-container">
      <div className="vezbanje-header">
        <h1>🏋️ Vežbanje</h1>
        <p>Pronađite najbolje vežbe za vaš nivo i ciljeve</p>
      </div>

      <div className="vezbanje-content">
        <section className="intro-section">
          <h2>Zašto je vežbanje važno?</h2>
          <p>
            Redovno vežbanje donosi brojne benefite vašem zdravlju. Poboljšava snagu mišića, 
            zdravlje srca, mentalno zdravlje i opšti kvalitet života. Bez obzira na to da li 
            ste početnik ili iskusni trener, postoji vežba koja odgovara vašim potrebama.
          </p>
        </section>

        <section className="exercises-section">
          <h2>Najbolje Vežbe za Početak</h2>
          <div className="exercises-grid">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="exercise-card">
                <div className="exercise-header">
                  <h3>{exercise.title}</h3>
                  <span className={`difficulty-badge difficulty-${exercise.difficulty.toLowerCase()}`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <div className="exercise-muscles">
                  <strong>Mišići:</strong> {exercise.muscles}
                </div>
                <p className="exercise-description">{exercise.description}</p>
                <div className="exercise-steps">
                  <strong>Kako se radi:</strong>
                  <ol>
                    {exercise.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tips-section">
          <h2>💡 Saveti za Uspeh</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Počnite Polako</h4>
              <p>Ne preterujte na početku. Vaše telo treba vreme da se prilagodi.</p>
            </div>
            <div className="tip-card">
              <h4>Budite Konzistentni</h4>
              <p>Bolje je trenirati 3 puta nedeljno nego jednom nedeljno intenzivno.</p>
            </div>
            <div className="tip-card">
              <h4>Slušajte Svoje Telo</h4>
              <p>Bol nije normalan. Ako osetite bol, odmorite se ili potražite pomoć.</p>
            </div>
            <div className="tip-card">
              <h4>Povedite Postepeno</h4>
              <p>Kada vežba postane laka, povećajte broj ponavljanja ili težinu.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Vezbanje;

