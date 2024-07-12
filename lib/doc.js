import fs from "fs"
import { Fuggles } from "next/font/google"
import path from "path"
import matter  from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const  postDirectory = path.join(process.cwd(), "docs")



export function getDocuments() 
{
    const fileNames = fs.readdirSync(postDirectory)
    
    const allDocuments = fileNames.map((fileName) => 
    {
        const id = fileName.replace(".md", "")
        // fileName take replace korbo md theke blank banay dbo 
        

        const fullPath = path.join(postDirectory, fileName)

        // ekhn file er content ta pura ta porar try korbo ami 

        const fileContents = fs.readFileSync(fullPath, "utf8")

        // ekhn parsing korbo. parsing er jnno amader kaje labe holo gray matter 

        const matterResult = matter(fileContents)

        // ei matter result er modhe as an object oi file er joto content ase sob chole ashce . Remember It has come as an object 

       

      
    })

}