import fs from "fs"
import path from "path"

const  postDirectory = path.join(process.cwd(), "docs")



export function getDocuments() 
{
    console.log(postDirectory)
}