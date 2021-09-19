import { v4 as uuid } from 'uuid';

abstract class BaseEntity {
  readonly id?: string;

  is_active?: boolean;

  readonly created_at?: Date;

  readonly updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.is_active) {
      this.is_active = true;
    }

    if (!this.updated_at) {
      this.updated_at = new Date();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export { BaseEntity };
