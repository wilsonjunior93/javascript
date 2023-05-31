/*function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homenbebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homenjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homenadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homenidoso.jpg')
            }        
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'mulherbebe.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}*/

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    var dataNascimento = new Date(fano.value);
    var anoNascimento = dataNascimento.getFullYear();
    var mesNascimento = dataNascimento.getMonth() + 1; // Os meses são indexados de 0 a 11

    if (isNaN(anoNascimento) || isNaN(mesNascimento) || anoNascimento > ano || (anoNascimento === ano && mesNascimento > data.getMonth() + 1)) {
      window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
      var fsex = document.getElementsByName('radsex');
      var idade = ano - anoNascimento;

      // Verificar se o aniversário já ocorreu este ano
      if (mesNascimento > data.getMonth() + 1 || (mesNascimento === data.getMonth() + 1 && dataNascimento.getDate() > data.getDate())) {
        idade--;
      }

      var genero = '';
      var img = document.createElement('img');
      img.setAttribute('id', 'foto');

      if (fsex[0].checked) {
        genero = 'homem';

        if (idade >= 0 && idade < 10) {
          // Criança
          img.setAttribute('src', 'homenbebe.jpg');
        } else if (idade < 21) {
          // Jovem
          img.setAttribute('src', 'homenjovem.jpg');
        } else if (idade < 50) {
          // Adulto
          img.setAttribute('src', 'homenadulto.jpg');
        } else {
          // Idoso
          img.setAttribute('src', 'homenidoso.jpg');
        }
      } else if (fsex[1].checked) {
        genero = 'mulher';

        if (idade >= 0 && idade < 10) {
          // Criança
          img.setAttribute('src', 'mulherbebe.jpg');
        } else if (idade < 21) {
          // Jovem
          img.setAttribute('src', 'mulherjovem.jpg');
        } else if (idade < 50) {
          // Adulto
          img.setAttribute('src', 'mulheradulta.jpg');
        } else {
          // Idoso
          img.setAttribute('src', 'mulheridosa.jpg');
        }
      }

      res.style.textAlign = 'center';
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      res.appendChild(img);
    }
  }