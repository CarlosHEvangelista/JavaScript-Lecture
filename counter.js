let Counter = 0

        function counter() {
            Counter++;
            document.querySelector("h1").innerText = Counter

            if( Counter % 10 === 0) {
                alert(`You pass the limit of ${Counter}`)
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector('button').onclick = counter;
        })
