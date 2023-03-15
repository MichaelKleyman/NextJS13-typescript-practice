import styles from '../dogfacts.module.css';

//this is all a dynamic route???
//data fetching function retrieving individual item
async function getFact(factIndex: number) {
  const res = await fetch('http://dog-api.kinduff.com/api/facts?number=5', {
    next: { revalidate: 10 }, //this implements incremental static regeneration (ISR). This tells next to regenerate the page on the server if its older than a certain number of seconds
  }); //DOG API
  const data = await res.json();
  return data?.facts[factIndex] as any[];
}

export default async function factPage({ params }: any) {
  //exporting this server component from this page.tsx file

  const fact = await getFact(params.index);

  return (
    <div>
      <h1>Individual fact</h1>
      <p className={styles.individual}>{fact}</p>
    </div>
  );
}
