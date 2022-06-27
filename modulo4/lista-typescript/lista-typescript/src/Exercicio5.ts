type person = {
    name: string,
    email: string,
    role: string
}

const arrayPerson: Array<person> =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const filterPersons = arrayPerson.filter((item)=> item.email && item.role === 'admin')

const mapArrayPerson = filterPersons.map((item) => item.email)


console.log(mapArrayPerson);
