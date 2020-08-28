class Usuario {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    getPersona(id) {

        let persona = this.personas.filter(person => person.id === id)[0];

        return persona;

    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {

        let personasEnsala = this.personas.filter(persona => {

            return persona.sala === sala;

        });
        return personasEnsala;

    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(person => person.id != id);

        return personaBorrada;
    }


}


module.exports = {

    Usuario

}