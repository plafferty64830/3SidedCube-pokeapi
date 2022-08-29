export function capsFirst(inputStr){
    const result = inputStr[0].toUpperCase() + inputStr.substring(1, inputStr.length)
    return result
}