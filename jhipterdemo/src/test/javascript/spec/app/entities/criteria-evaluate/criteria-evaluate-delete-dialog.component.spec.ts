/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaEvaluateDeleteDialogComponent } from 'app/entities/criteria-evaluate/criteria-evaluate-delete-dialog.component';
import { CriteriaEvaluateService } from 'app/entities/criteria-evaluate/criteria-evaluate.service';

describe('Component Tests', () => {
    describe('CriteriaEvaluate Management Delete Component', () => {
        let comp: CriteriaEvaluateDeleteDialogComponent;
        let fixture: ComponentFixture<CriteriaEvaluateDeleteDialogComponent>;
        let service: CriteriaEvaluateService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaEvaluateDeleteDialogComponent]
            })
                .overrideTemplate(CriteriaEvaluateDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CriteriaEvaluateDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CriteriaEvaluateService);
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
