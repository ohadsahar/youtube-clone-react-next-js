import Videos from '../components/Videos/Videos';
import videos from '../data';


export default function Home() {
  return (
    <div >
      <Videos videos={videos} />
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      videos
    }
  }
}