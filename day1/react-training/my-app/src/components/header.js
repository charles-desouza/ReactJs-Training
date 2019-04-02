import React, { Component } from 'react'


// export default class extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>Put your life in the hands of a computer</h2>
//             </div>
//         )
//     }
// }

 const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            </div>
    );
}


Header.defaultProps = {
    title: 'Indecision1'
};

export default Header