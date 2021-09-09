import React, { Component } from 'react'

class InputPage extends Component {
    constructor() {

        super()

        this.state = {
            EnterCode: "",
        }
    }

    CodeHandler = (event) => {
        this.setState({ EnterCode: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state.EnterCode)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)} >
                <div style={{ margin: '50px' }}>
                    <h1>Find Similar Nodes</h1><br />
                    <h2>Paste HTML in textbox below</h2><br />
                    <textarea class="h-96 w-full border-solid border-4 border-light-blue-500" onChange={this.CodeHandler}>
                    </textarea><br />
                    <div class="flex items-center justify-center">
                        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded content-center" type='submit'>
                            Process Code
                        </button>
                    </div>

                </div>
            </form>
        )
    }
}

export default InputPage;
