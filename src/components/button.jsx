export default function Button({ children, variant, onClick }) {
    return (
        <button className={`${variant}`} onClick={onClick}>
            {children}
        </button>
    );
}