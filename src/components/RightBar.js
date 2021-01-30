import React from 'react';

const RightBar = () => {
    return (
        <div class="col-12 col-lg-3 pt-3 right">
            <div class="row">
                <div class="col-6 col-md-12">
                    <h4>Collaborators</h4>
                    <div class="row">
                        <div class="col-12 col-md-4 center">
                            <img src="https://img.icons8.com/bubbles/2x/brunette-girl-art-palette.png" class="rounded mx-auto d-block college" alt="..."/>
                            <h6>Emeline</h6>
                        </div>
                        <div class="col-12 col-md-4 center">
                            <img src="https://img.icons8.com/bubbles/2x/user-male.png" class="rounded mx-auto d-block college" alt="..."/>
                            <h6>Tim</h6>
                        </div>
                        <div class="col-12 col-md-4 center">
                            <img src="https://img.icons8.com/bubbles/2x/brunette-girl-art-palette.png" class="rounded mx-auto d-block college" alt="..."/>
                            <h6>Alicia</h6>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-12">
                    <h4 class="mt-5">Stats</h4>
                    <p>Open Tasks: <strong id="nr-open-tasks">0</strong></p>
                    <p>Done Tasks: <strong id="nr-done-tasks">0</strong></p>
                    <p>Deleted Tasks: <strong id="nr-deleted-tasks">0</strong></p>
                </div>

            </div>
        </div>
    );
}

export default RightBar;
