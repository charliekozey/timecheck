import TaskItem from './TaskItem'

function TaskList({ tasks }) {

    // const taskArray = tasks.map()

    return (
        <div>
            <label htmlFor="start-time">
                start time: 
                </label>
            <input type="time"></input>
            {/* {taskArray} */}
            {/* <TaskItem /> */}

            <table>
                <tr>
                    <td>I'm not editable</td>
                </tr>
                <tr>
                    <td>
                        <div contenteditable="true">I'm editable</div>
                    </td>
                    <td>
                        <div contenteditable="true">I'm also editable</div>
                    </td>
                </tr>
            </table>

        </div>
        
    );
}

export default TaskList;
