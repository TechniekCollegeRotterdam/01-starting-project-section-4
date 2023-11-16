//door de "...props" wordt er aan de custom html element <Section title="Examples" id="examples"> het id toegevoegd. Zonder "...props" zou er geen id mee worden gegeven aan de <Section title="Examples" id="examples">
// de "...props" wordt een rest property genoemd

export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
