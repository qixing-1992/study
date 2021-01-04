import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>删除</button></td>
            </tr>
        );
    });
    
    return <tbody>{rows}</tbody>;
}

// class Table extends Component {
//     render() {
//         const { characterData } = this.props;
//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>
//         );
//     }
// }

const Table = (props) => {
    const { characterData } = props;
    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} />
        </table>
    );
}

export default Table;