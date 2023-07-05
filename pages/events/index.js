import Image from "next/image";
import Link from "next/link";
import AllEvents from "../../src/components/events/events-page";

const EventsPage = ({data}) => {
  return <AllEvents data={data} />
};
export default EventsPage

export async function getStaticProps() {
  const data = await import("/data/data.json");
  console.log(data)
  const { events_categories } = data
  // this console log doesnt display since we are in the server
  // console.log(events_categories);
  // In case we import the data from an API
  // we should himport EventsPage from './../../src/components/events/events-page';

  //   const res = await fetch('URL')
  //   const data = await res.json()
  // Here we can put any sensitive information since the browser never sees it
  // like keys, etc
  return {
    props: {
      data: events_categories,
    },
  };
}
