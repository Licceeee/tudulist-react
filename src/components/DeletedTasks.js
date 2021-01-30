import React from 'react';

const DeletedTasks = () => {
    return (
        <>
            <h5>Deleted tasks</h5>
            <ul class="ml-0" id="task-list-deleted">
                {/* Placeholder for dynamic deleted tasks list */}
            </ul>
            <button id="delete-all-tasks" class="btn btn-danger btn-sm" hidden>Delete permanently</button>
        </>
    );
}

export default DeletedTasks;
