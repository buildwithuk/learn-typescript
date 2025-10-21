
type Filter = {

    (array: number[], predicate: (item: number) => boolean): number[]
}

let filter : Filter = {
    call(thisArg, ...args) {
        
    },
