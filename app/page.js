'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [tasks, setTasks] = useState({
    home: [
      { id: 1, text: 'Hamad breakfast & get dressed', time: '7:30am', completed: false },
      { id: 2, text: 'Talal breakfast', time: '7:45am', completed: false },
      { id: 3, text: "Pack Hamad's RMS backpack", time: '8:00am', completed: false },
      { id: 4, text: 'Yousef bottle & change', time: '8:15am', completed: false },
      { id: 5, text: 'Leave for RMS dropoff', time: '8:30am', completed: false },
    ]
  });

  const toggleTask = (tabName, id) => {
    setTasks(prev => ({
      ...prev,
      [tabName]: prev[tabName]?.map(t => t.id === id ? { ...t, completed: !t.completed } : t) || []
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>🧠 Farah's Brain Dump</h1>
        <p>Your daily command center for mothering 3 under 5</p>
      </div>

      <div className={styles.tabs}>
        {['home', 'schedule', 'projects', 'grocery'].map(tab => (
          <button
            key={tab}
            className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'home' && (
        <div className={styles.tabContent}>
          <div className={styles.weatherCard}>
            <h2>Good Morning! ☀️</h2>
            <p>Rochester, MN • 42°F • Partly Cloudy</p>
          </div>

          <h3 className={styles.sectionTitle}>Today's Priorities</h3>
          <ul className={styles.taskList}>
            {tasks.home?.map(task => (
              <li key={task.id} className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask('home', task.id)}
                />
                <label className={styles.taskLabel}>{task.text}</label>
                <span className={styles.taskTime}>{task.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className={styles.tabContent}>
          <h3 className={styles.sectionTitle}>This Week's Schedule</h3>
          <div className={styles.kanbanBoard}>
            <div className={styles.kanbanColumn}>
              <div className={styles.kanbanTitle}>📋 To Do</div>
              <div className={styles.kanbanCard}>Walgreens (diapers, wipes)</div>
              <div className={styles.kanbanCard}>Daycare forms for Hamad</div>
              <div className={styles.kanbanCard}>Call cleaner lady (Thursday)</div>
            </div>

            <div className={styles.kanbanColumn}>
              <div className={styles.kanbanTitle}>⏳ In Progress</div>
              <div className={styles.kanbanCard}>Harvest Fest planning (weekend)</div>
              <div className={styles.kanbanCard}>Mom's Birthday gift search</div>
            </div>

            <div className={styles.kanbanColumn}>
              <div className={styles.kanbanTitle}>✅ Done</div>
              <div className={styles.kanbanCard}>Pay utilities</div>
              <div className={styles.kanbanCard}>Yousef 6-month checkup booked</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div className={styles.tabContent}>
          <h3 className={styles.sectionTitle}>Active Projects</h3>
          <ul className={styles.taskList}>
            <li className={styles.taskItem}>
              <input type="checkbox" />
              <label className={styles.taskLabel}>World Mastery Game (Hamad & Talal)</label>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" />
              <label className={styles.taskLabel}>Islamic Explorer Redesign</label>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" />
              <label className={styles.taskLabel}>Math Adventure Game</label>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" />
              <label className={styles.taskLabel}>Teta's Kitchen Maqluba Game</label>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" />
              <label className={styles.taskLabel}>Portfolio Launch (WorkWave prep)</label>
            </li>
            <li className={styles.taskItem}>
              <input type="checkbox" />
              <label className={styles.taskLabel}>Mother-in-law cookbook notes</label>
            </li>
          </ul>
        </div>
      )}

      {activeTab === 'grocery' && (
        <div className={styles.tabContent}>
          <h3 className={styles.sectionTitle}>Shopping List by Store</h3>

          <div className={styles.groceryStore}>
            <div className={styles.storeName}>🏪 Costco</div>
            <ul className={styles.storeItems}>
              <li>☑️ Diapers (size 3, 4)</li>
              <li>☑️ Wipes & diaper cream</li>
              <li>☑️ Chicken breast</li>
              <li>☑️ Olive oil & spices</li>
            </ul>
          </div>

          <div className={styles.groceryStore}>
            <div className={styles.storeName}>🛒 Trader Joe's</div>
            <ul className={styles.storeItems}>
              <li>☑️ Frozen meatballs (kibbeh)</li>
              <li>☑️ Greek yogurt</li>
              <li>☑️ Pita bread</li>
              <li>☑️ Hummus & labneh</li>
            </ul>
          </div>

          <div className={styles.groceryStore}>
            <div className={styles.storeName}>🎯 Target
