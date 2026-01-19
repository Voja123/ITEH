import React, { useState } from 'react';
import './Ciljevi.css';

function Ciljevi() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Izgubiti 5kg',
      category: 'Mršavljenje',
      deadline: '2024-03-01',
      progress: 60,
      completed: false
    },
    {
      id: 2,
      title: 'Sklek 50 puta',
      category: 'Snaga',
      deadline: '2024-02-15',
      progress: 80,
      completed: false
    },
    {
      id: 3,
      title: 'Trčanje 5km',
      category: 'Kardio',
      deadline: '2024-02-28',
      progress: 45,
      completed: false
    }
  ]);

  const [newGoal, setNewGoal] = useState({
    title: '',
    category: 'Snaga',
    deadline: ''
  });

  const goalTemplates = [
    {
      title: 'Izgubiti težinu',
      category: 'Mršavljenje',
      description: 'Postavite cilj za smanjenje telesne težine'
    },
    {
      title: 'Povećati snagu',
      category: 'Snaga',
      description: 'Ciljajte na jačanje određenih mišićnih grupa'
    },
    {
      title: 'Poboljšati izdržljivost',
      category: 'Kardio',
      description: 'Radite na svojoj kardio kondiciji'
    },
    {
      title: 'Dodati mišićnu masu',
      category: 'Hipertrofija',
      description: 'Gradite mišiće kroz trening snage'
    },
    {
      title: 'Fleksibilnost',
      category: 'Mobilnost',
      description: 'Poboljšajte svoju fleksibilnost i opseg pokreta'
    }
  ];

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoal.title || !newGoal.deadline) return;

    const goal = {
      id: Date.now(),
      title: newGoal.title,
      category: newGoal.category,
      deadline: newGoal.deadline,
      progress: 0,
      completed: false
    };

    setGoals([...goals, goal]);
    setNewGoal({ title: '', category: 'Snaga', deadline: '' });
  };

  const handleTemplateClick = (template) => {
    setNewGoal({
      ...newGoal,
      title: template.title,
      category: template.category
    });
  };

  const updateProgress = (id, newProgress) => {
    setGoals(goals.map(goal => 
      goal.id === id 
        ? { ...goal, progress: Math.min(100, Math.max(0, newProgress)), completed: newProgress >= 100 }
        : goal
    ));
  };

  return (
    <div className="ciljevi-container">
      <div className="ciljevi-header">
        <h1>🎯 Fitness Ciljevi</h1>
        <p>Postavite ciljeve i prati svoj napredak</p>
      </div>

      <div className="ciljevi-content">
        <section className="goals-intro">
          <h2>Zašto su ciljevi važni?</h2>
          <p>
            Postavljanje jasnih, merljivih ciljeva je ključ uspeha u fitnessu. Kada imate konkretan cilj, 
            lakše se fokusiramo i ostanemo motivisani. Praćenje napretka vas drži odgovornim i pomaže vam 
            da vidite koliko ste napredovali.
          </p>
        </section>

        <section className="add-goal-section">
          <h2>Dodaj Novi Cilj</h2>
          <form onSubmit={handleAddGoal} className="goal-form">
            <div className="form-row">
              <div className="form-group">
                <label>Naziv cilja</label>
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  placeholder="npr. Sklek 50 puta"
                  required
                />
              </div>
              <div className="form-group">
                <label>Kategorija</label>
                <select
                  value={newGoal.category}
                  onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                >
                  <option value="Snaga">Snaga</option>
                  <option value="Mršavljenje">Mršavljenje</option>
                  <option value="Kardio">Kardio</option>
                  <option value="Hipertrofija">Hipertrofija</option>
                  <option value="Mobilnost">Mobilnost</option>
                </select>
              </div>
              <div className="form-group">
                <label>Rok</label>
                <input
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="add-goal-btn">Dodaj Cilj</button>
          </form>

          <div className="templates-section">
            <h3>Brzi predlošci:</h3>
            <div className="templates-grid">
              {goalTemplates.map((template, index) => (
                <div
                  key={index}
                  className="template-card"
                  onClick={() => handleTemplateClick(template)}
                >
                  <h4>{template.title}</h4>
                  <p>{template.description}</p>
                  <span className="template-category">{template.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="my-goals-section">
          <h2>Moji Ciljevi</h2>
          {goals.length === 0 ? (
            <div className="no-goals">
              <p>Nemate postavljene ciljeve. Dodajte svoj prvi cilj gore!</p>
            </div>
          ) : (
            <div className="goals-list">
              {goals.map((goal) => (
                <div key={goal.id} className={`goal-card ${goal.completed ? 'completed' : ''}`}>
                  <div className="goal-header">
                    <h3>{goal.title}</h3>
                    <span className={`category-badge category-${goal.category.toLowerCase()}`}>
                      {goal.category}
                    </span>
                  </div>
                  <div className="goal-info">
                    <div className="goal-deadline">
                      <strong>Rok:</strong> {new Date(goal.deadline).toLocaleDateString('sr-RS')}
                    </div>
                    <div className="goal-progress">
                      <div className="progress-label">
                        <strong>Napredak:</strong> {goal.progress}%
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="progress-controls">
                      <button
                        onClick={() => updateProgress(goal.id, goal.progress - 10)}
                        disabled={goal.progress === 0}
                        className="progress-btn"
                      >
                        -10%
                      </button>
                      <button
                        onClick={() => updateProgress(goal.id, goal.progress + 10)}
                        disabled={goal.progress === 100}
                        className="progress-btn"
                      >
                        +10%
                      </button>
                    </div>
                  </div>
                  {goal.completed && (
                    <div className="completed-badge">✅ Završeno!</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="tips-section">
          <h2>💡 Saveti za Postavljanje Ciljeva</h2>
          <div className="tips-list">
            <div className="tip-item">
              <strong>SMART princip:</strong> Ciljevi treba da budu Specifični, Merljivi, 
              Dostižni, Relevantni i Vremenski ograničeni.
            </div>
            <div className="tip-item">
              <strong>Započnite malo:</strong> Bolje je postaviti manje ciljeve i uspeti, 
              nego velike ciljeve i odustati.
            </div>
            <div className="tip-item">
              <strong>Praćenje:</strong> Redovno proveravajte svoj napredak i prilagođavajte ciljeve 
              prema potrebi.
            </div>
            <div className="tip-item">
              <strong>Slavi uspehe:</strong> Kada postignete cilj, slavite i postavite novi!
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ciljevi;

