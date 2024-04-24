
console.log('Kalpro')

/**
 * return [cociente, resto]
 */
const div = (a, b) => {
    // a/b
    const c = Math.trunc(a / b)
    const r = a % b

    return [c, r]
}

// const out = div(4, 2)
// console.log(out)

/**
 * Bin  | Dec
 * Oct  | Hex
 */
const fromBin = (num, base = 'dec') => {

    let dig = num.toString().split('')
    let new_dig = dig.map(Number).reverse()
    // console.log(new_dig)

    let po = new_dig.map((n,index) => n*(Math.pow(2,index)))
    // console.log(po)

    const res = po.reduce((a,b)=>a+b,0)
    console.log(`total: ${res}, ${base}`)
}

// fromBin(100)