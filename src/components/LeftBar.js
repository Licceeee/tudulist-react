import React from 'react';
import DeletedTasks from './DeletedTasks';
import DoneTasks from './DoneTasks';

const LeftBar = () => {
    return (
        <div class="col-12 order-lg-first col-lg-3 pt-3">
           <DoneTasks />

            <DeletedTasks />
        </div>
    );
}

export default LeftBar;
