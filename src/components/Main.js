import React from 'react';
import LeftBar from './LeftBar';
import OpenTasks from './OpenTasks';
import RightBar from './RightBar';

const Main = () => {
    return (
        <main class="container main-container pb-5">
            
            <div class="col-12">
                <h1 id="list-title" class="center">Tu Du List</h1>
            </div>

            <div class="row"> 
                < OpenTasks />

                < LeftBar/>

                < RightBar/>
            </div>

        </main>
    );
}

export default Main;
