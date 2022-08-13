import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, content, date, time, handleDeleteNote }) => {
    // const { note, click } = props
    // const date = new Date().getDate()
    // const month = new Date().getMonth()
    // const year = new Date().getFullYear()
    // const hour = new Date().getHours()
    // const minute = new Date().getMinutes()

    return (
        <div className='note'>
            <span>{content}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <small>{time}</small>
                <MdDeleteForever className='delete-icon' onClick={() => handleDeleteNote(id)} size='1.5rem' />
            </div>
        </div>
    )
}

export default Note