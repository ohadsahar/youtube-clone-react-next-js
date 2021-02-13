import Videos from '../components/Videos/Videos';
import videos from '../data';


export default function Home() {
  return (
    <Videos videos={videos} />
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      videos
    }
  }
}