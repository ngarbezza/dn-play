import Ember from 'ember';

export default Ember.Component.extend({
  editandoResultado: true,
  pasos: [],
  cantidadDePasos: Ember.computed.alias('pasos.length'),
  formula: '',
  motivo: 'premisa',
  actions: {
    editarResultado() {
      this.toggleProperty('editandoResultado');
    },
    actualizarResultado() {
      this.toggleProperty('editandoResultado');
      this.set('resultadoEsperado', this.get('resultadoEsperado').replace(/not/g, '¬')
        .replace(/or/g, '⋁')
        .replace(/and/g, '⋀'));
    },
    agregarPaso() {
      var motivo = this.get('motivo');
      if (motivo === 'regla') {
        motivo = `${this.get('nombreRegla')} ${this.get('parametro1')}, ${this.get('parametro2')}, ${this.get('parametro3')}`;
      }
      this.get('pasos').pushObject({
        formula: this.get('formula')
          .replace(/not/g, '¬')
          .replace(/or/g, '⋁')
          .replace(/and/g, '⋀'),
        motivo: motivo
      });
      this.set('formula', '');
    }
  }
});
