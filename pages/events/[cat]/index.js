import CatEvent from "../../../src/components/events/catEvent";

const EventsCatPage = ({ data, pageName }) => <CatEvent data={data} pageName={pageName} />

export default EventsCatPage;

// we need to create the static paths from the data

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const { events_categories } = data;
  const allPaths = events_categories.map((item) => {
    return {
      params: {
        cat: item.id.toString(),
      },
    };
  });
  // console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log("Context:" ,context)
  const id = context?.params.cat
  const { allEvents } = await import("/data/data.json")
  // const data = all_Events.filter(ev=> ev.city === id.charAt(0).toUpperCase()+id.slice(1))
  const data = allEvents.filter((ev) => ev.city.toLowerCase() === id);
  // console.log(data)

  return {
    props: { data: data, pageName: id.charAt(0).toUpperCase() + id.slice(1) },
  }
}
