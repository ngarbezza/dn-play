import Ember from 'ember';
import { formularizar } from 'dn-play/helpers/formularizar';

export default Ember.Component.extend({
  editandoResultado: true,
  pasos: [],
  cantidadDePasos: Ember.computed.alias('pasos.length'),
  formula: '',
  motivo: 'premisa',
  reglas: [
    { id: 'ed', nombre: 'E ⋁' },
    { id: 'id', nombre: 'I ⋁' },
    { id: 'ec', nombre: 'E ⋀' },
    { id: 'ic', nombre: 'I ⋀' },
    { id: 'en', nombre: 'E ¬' },
    { id: 'in', nombre: 'I ¬' },
    { id: 'ei', nombre: 'E →' },
    { id: 'ii', nombre: 'I →' },
    { id: 'efsq', nombre: 'EFSQ' }
  ],
  nombreRegla: 'ed',
  parametro1: '1',
  parametro2: '2',
  parametro3: '3',
  actions: {
    editarResultado() {
      this.toggleProperty('editandoResultado');
    },
    actualizarResultado() {
      this.toggleProperty('editandoResultado');
      this.set('resultadoEsperado', formularizar(this.get('resultadoEsperado')));
    },
    agregarPaso() {
      var motivo = this.get('motivo');
      if (motivo === 'regla') {
        motivo = `${this.get('nombreRegla')} ${this.get('parametro1')}, ${this.get('parametro2')}, ${this.get('parametro3')}`;
      }
      this.get('pasos').pushObject({
        formula: formularizar(this.get('formula')),
        motivo: motivo
      });
      this.set('formula', '');
    }
  }
});
