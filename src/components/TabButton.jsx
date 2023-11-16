export default function TabButton({ children, isSelected, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  //      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
  //      De onclick is veranderd voor {...props} dit is een rest property
  //      Om de buttons te laten werken moet in de Examples.jsx allen onClick veranderd worden door onClick

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
