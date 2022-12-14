import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Usuario} from './usuario.model';

@model()
export class Gasto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'boolean',
    required: true,
  })
  valor: boolean;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @belongsTo(() => Usuario)
  usuarioId: string;

  constructor(data?: Partial<Gasto>) {
    super(data);
  }
}

export interface GastoRelations {
  // describe navigational properties here
}

export type GastoWithRelations = Gasto & GastoRelations;
