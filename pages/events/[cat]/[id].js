// import Image from 'next/image';

import SingleEvent from '../../../src/components/events/single-event'

const EventPage = ({data}) =><SingleEvent data={data} />
    //   <div>
    //     <Image src={data.image} width={1000} height={500} alt={data.title}/>
    //     <h1>{data.title}</h1>
    //     <p>{data.description}</p>
    //   </div>

export default EventPage


export async function getStaticPaths() {
const data = await import ('/data/data.json')
const allEvents = data.allEvents
const allPaths = allEvents.map((item) => {
    return {
        params: {
            cat: item.city,
            id: item.id
        }
    }
})
    return {
        paths:allPaths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const id= context.params.id
    const {allEvents} = await import("/data/data.json")
    const eventData = allEvents.find(item => item.id === id)
    return{

        props:{data:eventData }
    }

}