    const input = document.querySelector('input')
    const btn = document.querySelector('button')
    const result = document.querySelector('#result')

    let toBinary = (x) => x.toString(2)

    function solveJosephus() {
      let val = input.value

      if(val < '0' || ""){

          alert('Enter number larger than 0')

        } else {

          let conv = toBinary(+val).substring(1) + toBinary(+		val)[0]
          result.innerHTML = parseInt(conv, 2)

        }
    }

    btn.addEventListener('click', () => solveJosephus())
