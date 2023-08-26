import Code from "@/models/Code"
import { database } from "."
import { ICode } from "@/interfaces"

export const getCodes = async () => {
  
  try {
    await database.connect()
    const codes = await Code.find().lean()
    await database.disconnect()

    return JSON.parse(JSON.stringify( codes ))
  } catch (error) {
    await database.disconnect()
    console.log(error)
    return null
  }
}

export const createCodes = async ( numberOfCodesToCreate: number ) => {
  
  try {
    let newCodes: string[] = []

    await database.connect()

    const codesCreated = (await Code.find().lean()).map( c => (c.code))

    while ( newCodes.length < numberOfCodesToCreate ) {
      
      let date = new Date()
      let newCode = `${ date.getDay()}${date.getMonth()}`

      while ( newCode.length < 5 ) {
        newCode += Math.floor(Math.random() * 10)
      }

      if( !newCodes.includes(newCode) && !codesCreated.includes(newCode)){
        newCodes.push( newCode )
      }
    }

    await database.disconnect()

    return newCodes
    
  } catch (error) {
    await database.disconnect()
    console.log(error)
    return null
  }
}

export const saveCodes = async ( codesToSave: string[] ) => {
  
  try {
    await database.connect()

    const codesToDatase: ICode[] = codesToSave.map( code => {
      return {
        code,
        attendace: false,
        name: '',
        isRegister: false
      }
    })

    await Code.insertMany( codesToDatase )
    await database.disconnect()

    return codesToDatase
  } catch (error) {
    await database.disconnect()
    console.log(error)
    return null
  }
}

export const deleteAllCodes = async () => {
  try {
    await database.connect()
    await Code.deleteMany()
    await database.disconnect()

    return true
  } catch (error) {
    await database.disconnect()
    console.log(error)
    return false
  }
}

export const updateCode = async ( code: string, name: string) => {
  
  try {
    await database.connect()

    const codeToChange = await Code.findOne({code})

    if( !codeToChange ) throw new Error('No se encontro ningun codigo')

    codeToChange.name = name
    await codeToChange.save()
    await database.disconnect()

    return true

  } catch (error) {
    await database.disconnect()
    console.log(error)
    return false
  }

}