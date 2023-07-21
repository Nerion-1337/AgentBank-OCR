export default function isEmpty(value){

    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).lengh === 0) ||
        (typeof value === "string" && value.trim().lengh === 0)
    )
}