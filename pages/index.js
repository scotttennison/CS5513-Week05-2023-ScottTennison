import Link from 'next/link';
import Layout from '../components/layout';
import { getTeamList } from '../lib/data';


export async function getStaticProps() {
  const allTeam = getTeamList();
  return {
    props: { allTeam }
  };
}


export default function Home({ allTeam }) {
  return (
    <Layout home>
      <div className="home-container">
        <h1>Top Six Teams to Win the Super Bowl</h1>
        <ul className="list-group">
          {allTeam && allTeam.map(
            ({ id, team_name }) => (
              <li key={id} className="list-group-item">
                <Link href={`/${id}`} className="list-group-link">
                  {team_name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </Layout>
  );
}