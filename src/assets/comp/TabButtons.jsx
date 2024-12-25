export default function TabButton({ onSelect, children, addClass }) {
  return (
    <button className={addClass} onClick={onSelect}>
      {children}
    </button>
  );
}
