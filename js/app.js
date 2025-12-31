let skillsSection = document.querySelector(".skills__div");
let hobbiesSection = document.querySelector(".hobbies__div");
let formacoesSection = document.querySelector(".formacoes__div");
let projetosSection = document.querySelector(".experiencia__projetos");
let trabalhosSection = document.querySelector(".empregos_div");


function exibeSkills(infos) {
    let skills = infos.skills
    skills.forEach(skill => {
        skillsSection.innerHTML += `
        <div class="skills__skil">
            <img
                class="skills__imagem__${skill.class}"
                src="${skill.img}"
                alt="Logo ${skill.nome}"
            />
            <span class="skills__span">${skill.nome}</span>
        </div>
        `
    });
}
function exibeHobbies(infos) {
    let hobbies = infos.hobbies
    hobbies.forEach(hobby => {
        hobbiesSection.innerHTML += `
        <div class="hobbies__hobby">
            <img 
                class="hobbies__imagem" 
                src="${hobby.img}" 
                alt="${hobby.nome}" 
            />
            <span class="hobbies__span">${hobby.nome}</span>
        </div>
        `
    });
}
function exibeFormacoes(infos) {
    let formacoes = infos.formacoes
    formacoes.forEach(formacao => {
        formacoesSection.innerHTML += `
        <div class="formacoes__formacao">
            <div class="formacao__imagem__container">
              <a
                href="${formacao.link}"
                title="Ir para o site da escola"
                target="_blank"
              >
                <img
                  class="formacao__imagem"
                  src="${formacao.img}"
                  alt="${formacao.nome}"
                />
              </a>
            </div>
            <p class="formacao__nome">${formacao.nome}</p>
            <span class="formacao__span">${formacao.descricao}</span>
          </div>
        `
    });
}
function exibeTrabalhos(infos) {
  let trabalhos = infos.trabalhos;
  trabalhos.forEach(trabalho => {
    trabalhosSection.innerHTML += `
      <div class="empregos_emprego">
            <div class="emprego__imagem__container">
            <a href="${trabalho.link}">
              <img
              class="emprego__imagem"
                  src="${trabalho.img}"
                  alt="${trabalho.nome}"
                />
            </a>
              
            </div>
            <p class="emprego__nome">${trabalho.nome}</p>
            <span class="emprego__span">${trabalho.descricao}</span>
          </div>
    `
  })
}
function exibeProjetos(infos) {
    let projetos = infos.projetos
    projetos.forEach(projeto => {
        projetosSection.innerHTML += `
        <div class="experiencia__div">
              <img
                class="experiencia__imagem"
                src="${projeto.img}"
                alt="${projeto.nome}"
              />
              <div class="experiencia__projeto">
                <p class="projeto__nome">${projeto.nome}</p>
                <p class="projeto__lugar">${projeto.descricao}</p>
                <div class="projeto__botoes">
                  <a
                    class="projeto__botao1"
                    href="${projeto.repositorio}"
                    target="_blank"
                    >Repositório</a
                  >
                  <a
                    class="projeto__botao2"
                    href="${projeto.demo}"
                    target="_blank"
                    >Ver Demo</a
                  >
                </div>
              </div>
            </div>
        `
    });
}



async function consomeApi() {
    fetch('info.json')
        .then(response => response.json()).then(data => {
            exibeSkills(data)
            exibeHobbies(data)
            exibeFormacoes(data)
            exibeProjetos(data)
            exibeTrabalhos(data)
        })
}



function enviarMensagem() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let assunto = document.getElementById("assunto").value
    let msg = document.getElementById("mensagem").value
  
    let url = "https://api.whatsapp.com/send?phone=5511963596715&text="
        + "*Formulário de Contato*" + "%0A"
        + "%0A"
        + "*Nome*: " + nome + "%0A"
        + "*Email*: " + email + "%0A"
        + "*Assunto*: " + assunto + "%0A"
        + "*Mensagem*: " + msg;

    window.open(url, '_blank');
}

consomeApi()