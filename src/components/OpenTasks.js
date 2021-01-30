import React from 'react';

const OpenTasks = () => {
    return (
        <>
           <div class="col-12 col-lg-6 shadow row m-0 pt-3">
                <h3>Open Tasks</h3>

                <div class="col-12 pb-2">
                    <div class="input-group col-12">
                        <input id="add-task-input" type="text" class="form-control form-control-lg add-task" placeholder="Add task ..."/>
                        <button id="btn-add-task" class="input-group-text btn-danger" id="add-task-btn">
                            + 
                        </button>
                    </div>
                </div>
                <ul id="task-list" class="col-12">
                    // Placeholder dynamic list
                </ul>
            </div>  
        </>
    );
}

export default OpenTasks;
