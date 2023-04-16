import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }

    postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello world!',
                body: 'Well look at that, it works!',
                userId: 1987,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

    render() {
        const {apiResponse} = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create post
                </button>
                {
                    apiResponse
                    ? (<div>
                        <h1>{apiResponse.title}</h1>
                        <p>User ID: {apiResponse.userId}</p>
                        <p>ID: {apiResponse.id}</p>
                        <p>Body: {apiResponse.body}</p>
                    </div>) : (
                        <p>Please click the button above</p>
                    )
                }
            </div>
        )
    }
}

export default HTTPPost