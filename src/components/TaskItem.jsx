import React, { useState } from 'react';
import { MdDeleteSweep, MdEdit, MdSave, MdCancel } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, toggleCheck, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.taskName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    editTask(task.taskName, editedTaskName);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedTaskName(task.taskName);
  };

  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSaveClick();
              if (e.key === 'Escape') handleCancelClick();
            }}
            autoFocus
          />
        ) : (
          <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
        )}
      </div>

      {isEditing ? (
        <>
          <MdSave className="edit-icon" onClick={handleSaveClick} title="Save" />
          <MdCancel className="edit-icon" onClick={handleCancelClick} title="Cancel" />
        </>
      ) : (
        <>
        <div className="icons-container"></div>
          <MdEdit className="edit-icon" onClick={handleEditClick} title="Edit" />
          <MdDeleteSweep className="delete-icon" onClick={() => deleteTask(task.taskName)} title="Delete" />
        </>
      )}
    </li>
  );
};

export default TaskItem;
