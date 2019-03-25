/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaTypeDeleteDialogComponent } from 'app/entities/criteria-type/criteria-type-delete-dialog.component';
import { CriteriaTypeService } from 'app/entities/criteria-type/criteria-type.service';

describe('Component Tests', () => {
    describe('CriteriaType Management Delete Component', () => {
        let comp: CriteriaTypeDeleteDialogComponent;
        let fixture: ComponentFixture<CriteriaTypeDeleteDialogComponent>;
        let service: CriteriaTypeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaTypeDeleteDialogComponent]
            })
                .overrideTemplate(CriteriaTypeDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CriteriaTypeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CriteriaTypeService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
