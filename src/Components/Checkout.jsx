import React from 'react'

function Checkout() {
    return (
        <div>

            <div class="d-flex h-200 text-center text-white bg-dark">

                <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header class="mb-auto">
                        <div>
                            <h3 class="float-md-start mb-0"></h3>
                        </div>
                    </header>

                    <main class="px-4">
                        <h1 className='my-3'>Yay! Your Order Placed!</h1>
                        <p class="lead">Thank You ! Your Food is few more step ahead ! Please proceed to eliminate the wait ! </p>
                        <p class="lead">
                            <a href="#" class="btn btn-lg btn-secondary pay">Proceed To Pay!</a>
                        </p>
                    </main>

                    <footer class="mt-auto text-white-50">
                        <p>Project by <a href="https://github.com/Midnight-thinker" class="text-white">Debasmita Chakraborty !</a></p>
                    </footer>
                </div>



            </div>
        </div>
    )
}

export default Checkout
