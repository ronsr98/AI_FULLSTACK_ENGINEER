// a child component - it just gets name + revenue from props and shows them
const Company = (props) => {
  const explodedRevenue = props.revenue * 100

  return (
    <div>
      <p>{props.name} earns {explodedRevenue}</p>
    </div>
  )
}

export default Company
