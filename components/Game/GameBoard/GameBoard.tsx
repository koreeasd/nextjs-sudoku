import styles from './GameBoard.module.css';

export interface IGameBoard {}

const GameBoard: React.FunctionComponent = () => {
    const rows = Array.from({ length: 9 }, (_, i) => i + 1);

    return (
        <table className={styles.game__board}>
            <tbody>
                {
                    rows.map((row) => (
                        <tr key={row}>
                            {
                                rows.map((col) => (
                                    <td key={col}>
                                        <input type="text" />
                                    </td>
                                ))
                            }
                        </tr>
                    ))   
                }
            </tbody>
        </table>
    );
}

export default GameBoard;