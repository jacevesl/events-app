import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({data}) => {
  return (
      <div className="events_page">
              {data.map((eventItem, ) => (
                  <Link key={eventItem.id} href={`/events/${eventItem.id}`} passHref>
                    <a className="card">
                          <Image
                              width={500}
                              height={500}
                              src={eventItem.image}
                              alt={eventItem.title}
                          />
                          <h2>{eventItem.title}</h2>
                    </a>
                  </Link>
              ))}
      </div>
  )
}

export default AllEvents