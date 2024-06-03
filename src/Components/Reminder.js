import React, { useState } from 'react';
import './Style.css';

const Reminder = ({ task }) => {
  const [showReminder, setShowReminder] = useState(false);
  const [reminderDate, setReminderDate] = useState(null);

  const handleSetReminder = (event) => {
    setReminderDate(new Date(event.target.value));
    setShowReminder(true);
  };

  // Implement reminder functionality here (incomplete)
  const handleReminder = () => {
    // Logic to handle reminder notification (e.g., alert, toast)
    console.log(`Rappel défini pour la tâche "${task.name}" à ${reminderDate}`);
  };

  return (
    <div className="reminder">
      {!showReminder && (
        <button onClick={() => setShowReminder(true)}>Définir un rappel</button>
      )}
      {showReminder && (
        <div>
          <input type="datetime-local" value={reminderDate?.toISOString()} onChange={handleSetReminder} />
          {reminderDate && <p>Rappel défini pour : {reminderDate.toLocaleString()}</p>}
          <button onClick={handleReminder}>Confirmer le rappel</button>
        </div>
      )}
    </div>
  );
};

export default Reminder;
