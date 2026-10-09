export default function ListBlock({ subtitle, items }) {
  return (
    <div>
      {subtitle && <h2>{subtitle}</h2>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}