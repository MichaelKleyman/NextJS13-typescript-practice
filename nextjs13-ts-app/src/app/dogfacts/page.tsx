//this route will fetch all the notes from pocketbase and provides a form to create a new note
import Link from 'next/link';
import styles from './dogfacts.module.css';

async function getFacts() {
  //what is returned is all server rendered, however nextjs now automatically caches this route because the route segment is not dynamic, so its treated as a static page.
  //adding {cache: 'no-store'} will refetch the items from the server on every request, this is the equivalent to getServerSideProps
  const res = await fetch('http://dog-api.kinduff.com/api/facts?number=5', {
    cache: 'no-cache',
  }); //DOG API
  const data = await res.json();
  return data?.facts as any[]; //array of the data
  //   return data;
}

//the components are server components by default
export default async function page() {
  //to fetch the data above, await the call to this function
  const facts = await getFacts();

  return (
    <div>
      <h1>Dog Facts</h1>
      <div className={styles.grid}>
        {facts?.map((fact, i) => (
          <Fact key={i} fact={fact} index={i} />
        ))}
      </div>
    </div>
  );
}

// fact component below
function Fact({ fact, index }: any) {
  return (
    <Link href={`/dogfacts/${index}`} className={styles.solofact}>
      <div className={styles.facts}>
        <h2>Dog Fact #{index + 1}</h2>
        <h5>{fact}</h5>
      </div>
    </Link>
  );
}
