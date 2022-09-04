import type { NextPage } from 'next';
import Game from '../components/Game/Game/Game';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1>
                Itt lesz a sudoku!
            </h1>
            <Game />
        </div>
    );
};

export default Home;
