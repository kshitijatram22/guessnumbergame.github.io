  
        let btn = document.querySelector('.btn')
        let playAgain = document.querySelector('.playAgain')
        let input = document.querySelector('.form-control')
        let random = Math.floor(Math.random() * 20 + 1)
        console.log(random)
        let body = document.body
        let ans = document.querySelector('#ans')
        let score1 = document.querySelector('#score')
        let score = 1;

        playAgain.addEventListener('click', reload)

        function reload(event) {
            location.reload()
        }

        btn.addEventListener('click', check)
        function check(e) {
            let num = input.value;

            if (random == num) {
                ans.textContent = 'Your Guess is Correct.🎉 '
                score1.textContent = 'Score = ' + score;
                body.className = 'green'
            }
            else if (random > num) {
                ans.textContent = `Too Low, Take Larger Than ${input.value} 😶`;
                score1.textContent = 'Score = ' + score++;

            }
            else {
                ans.textContent = `Too High, Take Smaller Than ${input.value} 😐`;
                score1.textContent = 'Score = ' + score++;
            }


        }