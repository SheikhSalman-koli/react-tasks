export default function SingleUser({user}){
   const {name, company, address} = user
   const companyName = company.name
   const city = address.city
   console.log(city)
    return(
        <div className="card">
            <h3>name: {name}</h3>
            <h3>Company_name: {companyName}</h3>
            <h3>city: {city}</h3>
        </div>
    )
}