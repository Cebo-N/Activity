export interface Companion{
    results : Array<Person>
}
interface Person{
    name : Name
    picture : Picture
}

interface Name{
    first : string
    last : string
}

interface Picture{
    large : string
    medium : string
    thumbnail : string
}