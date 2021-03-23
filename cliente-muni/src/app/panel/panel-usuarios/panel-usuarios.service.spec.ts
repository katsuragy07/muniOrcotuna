import { TestBed } from '@angular/core/testing';

import { PanelUsuariosService } from './panel-usuarios.service';

describe('PanelUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanelUsuariosService = TestBed.get(PanelUsuariosService);
    expect(service).toBeTruthy();
  });
});
