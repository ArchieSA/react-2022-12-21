
export const Tab = ({ title, onClick, isActive }) => {

    return (
        <button disabled={isActive} onClick={onClick}> {title} </button>
    )
}