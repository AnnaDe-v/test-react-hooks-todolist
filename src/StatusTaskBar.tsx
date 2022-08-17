import React from 'react';

import './styles.css';

const StatusTaskBar = () => {
    return (
        <div className="task-status-bar">
                <span className="task-status-bar__item">
                    All
                </span>
            <span className="task-status-bar__item">
                    Active
                </span>
            <span className="task-status-bar__item">
                    Complete
                </span>
        </div>
    );
};

export default StatusTaskBar;