//*EXO1
let prenom = prompt("Quel est votre prénom ? \n1/2")
alert(`Voici la première lettre de votre prénom : ${prenom.charAt(0).toUpperCase()}`)
//*EXO2
let name = prompt("Quel est votre prénom ?\n2/2 ")
alert(`Voici votre prénom sans la première lettre : ${name.slice(1, name.length)}`)

//*EXO3
if (name.length >= 5) {
    alert(`Voici la 5ème lettre de votre prénom : ${name.charAt(4)}`)
}else{
    alert(`Votre prénom est trop court. Il n'est que de ${name.length} caractère`)
}

//*EXO4
if (name.length >= 5) {
    alert(`Voici la 5ème lettre de votre prénom : ${name.charAt(4)}`)
}else{
    alert(`Votre prénom est trop court. Il n'est que de ${name.length} caractère.\n Mais voici la dernier lettre de votre prénom : ${name.charAt(name.length-1)}`)
}

//*EXO5
let tab = ["Rentrez votre animal préféré", "Rentrez votre repas préféré", " Rentrez le prénom de votre parent"," Rentrez le nom de quelqu'un" ]
let allmin = prompt(`${tab[0]} \n 1/${tab.length}`).toLowerCase()
alert(allmin)
let allmaj = prompt(`${tab[1]} \n 2/${tab.length} `).toUpperCase()
alert(allmaj)
let firstmaj = prompt(`${tab[2]} \n 3/${tab.length} `)
alert(firstmaj.charAt(0).toUpperCase() + firstmaj.slice(1, firstmaj.length))
let firstmin = prompt(`${tab[3]} \n 4/${tab.length} `)
alert(firstmin.charAt(0).toLowerCase() + firstmin.slice(1, firstmin.length).toUpperCase())

