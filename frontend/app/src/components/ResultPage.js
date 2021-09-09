import React, { Component } from 'react';

class ResultPage extends Component {
    render() {
        return (
            <div>
                <div class="flow-root mt-12">
                    <h1 class="float-left ml-24">RESULTS</h1>
                    <button class="mr-24 float-right bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded content-center" type='submit'>
                        Run Again
                    </button>
                </div>

                <div class="grid ml-20 mr-20 md:grid-flow-col grid-rows-2 gap-y-0.5 gap-x-96">

                    <div class="max-w-sm max-h-full rounded overflow-hidden shadow-lg border border-gray mx-24 my-24 px-6 py-4">
                        <div class="bg-gray-300">
                            <div class="font-bold text-4xl mb-2 px-8 py-8">H1 TEXT HERE</div>
                        </div><br />
                        <div>
                            <h2 class="font-bold text-black-600 text-base">Name</h2><br />
                            <h2 class="font-bold text-black-600 text-base">Occurance</h2>
                        </div><br />
                    </div>

                    <div class="max-w-sm max-h-full rounded overflow-hidden shadow-lg border border-gray mx-24 my-24 px-6 py-4">
                        <div class="bg-gray-300">
                            <div class="font-bold text-4xl mb-2 px-8 py-8">H1 TEXT HERE</div>
                        </div><br />
                        <div>
                            <h2 class="font-bold text-black-600 text-base">Name</h2><br />
                            <h2 class="font-bold text-black-600 text-base">Occurance</h2>
                        </div><br />
                    </div>

                    <div class="max-w-sm max-h-full rounded overflow-hidden shadow-lg border border-gray mx-24 my-24 px-6 py-4">
                        <div class="bg-gray-300">
                            <div class="font-bold text-4xl mb-2 px-8 py-8">H1 TEXT HERE</div>
                        </div><br />
                        <div>
                            <h2 class="font-bold text-black-600 text-base">Name</h2><br />
                            <h2 class="font-bold text-black-600 text-base">Occurance</h2>
                        </div><br />
                    </div>

                    <div class="max-w-sm max-h-full rounded overflow-hidden shadow-lg border border-gray mx-24 my-24 px-6 py-4">
                        <div class="bg-gray-300">
                            <div class="font-bold text-4xl mb-2 px-8 py-8">H1 TEXT HERE</div>
                        </div><br />
                        <div>
                            <h2 class="font-bold text-black-600 text-base">Name</h2><br />
                            <h2 class="font-bold text-black-600 text-base">Occurance</h2>
                        </div><br />
                    </div>

                </div>
            </div >
        );
    }
}

export default ResultPage;
