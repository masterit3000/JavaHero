/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { FullEvaluateDeleteDialogComponent } from 'app/entities/full-evaluate/full-evaluate-delete-dialog.component';
import { FullEvaluateService } from 'app/entities/full-evaluate/full-evaluate.service';

describe('Component Tests', () => {
    describe('FullEvaluate Management Delete Component', () => {
        let comp: FullEvaluateDeleteDialogComponent;
        let fixture: ComponentFixture<FullEvaluateDeleteDialogComponent>;
        let service: FullEvaluateService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [FullEvaluateDeleteDialogComponent]
            })
                .overrideTemplate(FullEvaluateDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FullEvaluateDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FullEvaluateService);
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
