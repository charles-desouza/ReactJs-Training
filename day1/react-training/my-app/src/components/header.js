import React, { Component } from 'react'


export default class extends Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}