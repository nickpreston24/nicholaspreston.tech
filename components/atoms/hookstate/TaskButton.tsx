export const TaskButton = (props: {
    onClick?: () => void;
    borderColor?: string;
    text: string;
    style?: React.CSSProperties;
}) => {
    return <button
        style={{
            fontSize: '1em',
            border: 'solid',
            borderWidth: 1,
            borderColor: props.borderColor || 'grey',
            color: 'white',
            background: 'none',
            padding: 10,
            minWidth: 110,
            ...props.style
        }}
        onClick={props.onClick}
    >{props.text}</button>
}

export default TaskButton