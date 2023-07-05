import React from 'react'
import Image from "next/image";
import Link from "next/link";

const CatEvent = ({data, pageName}) => {
  return (
      <div className='cat_events'>
          <h1>Events in {pageName}</h1>
          <div className='content'>
            {data.map((item, index) => (
                <Link key={index} href={`/events/${item.city}/${item.id}`} passHref>
                    <a className='card'>
                        <Image alt={item.title} src={item.image} width={300} height={300} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </a>
                </Link>
            ))}
          </div>
      </div>
  )
}

export default CatEvent