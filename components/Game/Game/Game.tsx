import GameBoard from '../GameBoard/GameBoard';
import styles from './Game.module.css';

export interface IGame {

}

const Game: React.FunctionComponent = () => {
    return (
        <section className={styles.game}>
            <GameBoard />
        </section>
    );
}

export default Game;