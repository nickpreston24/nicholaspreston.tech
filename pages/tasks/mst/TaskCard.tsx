import * as React from 'react'
import { observer } from 'mobx-react'
// import { Task } from '../../../models'
import { Card } from '../../../components/molecules/SlottedCard'
// import { Task } from '../TaskStore';

interface PropsType {
    // task: Task;
}

class TaskCard extends React.Component<PropsType, any> {
    private isDeleting: boolean = false;

    public render() {
        // const { task } = this.props
        // const { finished, text } = task.data

        // console.log('TodoItem.render: ', task.path, ', text: ', text)

        return (
            <Card>Card 1</Card>
            // <Paper elvation={1}>
            //     <div className="task-row">
            //         <Checkbox
            //             className="task-checkbox"
            //             onChange={this.onPressCheck}
            //             checked={finished}
            //         />
            //         <TextField
            //             id={task.id}
            //             className="task-input"
            //             placeholder={text ? undefined : "What needs to be done?"}
            //             onChange={this.onTextChange}
            //             value={text || ""}
            //         />
            //         <IconButton
            //             className="task-icon"
            //             color="secondary"
            //             onClick={this.onPressDelete}
            //         >
            //             <DeleteIcon />
            //         </IconButton>
            //     </div>
            //     <Divider />
            // </Paper>
        )
    }

    // private onPressDelete = async () => {
    //     const { task } = this.props
    //     if (this.isDeleting) {
    //         return
    //     }
    //     this.isDeleting = true
    //     try {
    //         await task.delete()
    //         this.isDeleting = false
    //     } catch (err) {
    //         this.isDeleting = false
    //     }
    // };

    // private onPressCheck = async () => {
    //     const { task } = this.props
    //     await task.update({
    //         finished: !task.data.finished
    //     })
    // };

    // private onTextChange = async (event: any) => {
    //     const { task } = this.props
    //     await task.update({
    //         text: event.target.value
    //     })
    // };
}

export default observer(TaskCard)