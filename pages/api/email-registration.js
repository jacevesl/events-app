import path from 'path'
import fs from 'fs'
// this module is to read/write data to a file

function buildPath(){
    // we will construct the absolute path to the data (json file)
   return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath){
const jsonData = fs.readFileSync(filePath)
const data = JSON.parse(jsonData)
return data
}



export default function handler(req, res) {
    // req.method === 'POST' {
    // }
    const {method} = req
    // Access our data
    // extract the data:
            // if there are no events res is 404
        // allEvents: loop through them and identify the eventId 
        // write the email to the 'emails_registered' key
        // (only if that email does not exist)
        // before we have to check if the format of the email is correct

    const filePath = buildPath()
    const {events_categories, allEvents} = extractData(filePath)

    if (!allEvents){
        return req.status(404).json({
            status:404, 
            message:'Events data not found'
        })
    }
    
    if (method==='POST'){
        const {email, eventId} = req.body
       if(!email | !email.includes('@')) {
        res.status(422).json({message: 'Invalid email address'})
        return
       }
        
        
        // we add our code here
        const newAllEvents = allEvents.map(ev => {
            if (ev.id === eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(409).json({message: 'This email has already been registered'})
                    return ev
                }
                return {
                    // Add the email to data (json)
                    ...ev, emails_registered:[...ev.emails_registered, email]
                }
             }
             return ev
        })

        fs.writeFileSync(filePath,JSON.stringify({events_categories, allEvents:newAllEvents} ))

        res.status(201)
        .json({message: `You have registered with email: ${email} to the event: ${eventId}`})
    }

}