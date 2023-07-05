import Image from "next/image";
import Link from "next/link";


const HomePage = ({ data }) => (
        <div className="home_body">
            {data.map((eventItem) => (
                <Link key={eventItem.id} href={`/events/${eventItem.id}`} passHref>
                    <a className="card" href={`/events/${eventItem.id}`}>
                        <div className="image">
                        <Image
                            width={600}
                            height={400}
                            src={eventItem.image}
                            alt={eventItem.title}
                        />
                        </div>
                        <div className="content">
                            <h2>{eventItem.title}</h2>
                            <p>{eventItem.description}</p>
                        </div>
                    </a>
                </Link>
            ))}
        </div>
    
)

export default HomePage