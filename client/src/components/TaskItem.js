

function TaskItem() {

    return (
        <div className="task-item">
            
            {/* <form onSubmit={(e) => handleCreateAccount(e)}> */}
            <form>
                <input type="text" name="task-name" id="task-name" placeholder="next task" />
                <input type="number" name="expected-time" id="expected-time" placeholder="1-120 minutes" />
                <input type="number" name="actual-time" id="actual-time" placeholder="1-360 minutes" />
                <input type="submit" value="save task">
                </input>
            </form>
        </div>
        
    );
}

export default TaskItem;
