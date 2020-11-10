
    let n = 0;
    let res = document.getElementById('res')
    
    
    function contar() {
        n ++
        res.innerHTML = `<p>O contador está com <mark>${n}</mark> cliques.</p>`;
  } 
  function zerar() {
      n = 0
      res.innerHTML = null
  }