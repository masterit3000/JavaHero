/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { FullEvaluateUpdateComponent } from 'app/entities/full-evaluate/full-evaluate-update.component';
import { FullEvaluateService } from 'app/entities/full-evaluate/full-evaluate.service';
import { FullEvaluate } from 'app/shared/model/full-evaluate.model';

describe('Component Tests', () => {
    describe('FullEvaluate Management Update Component', () => {
        let comp: FullEvaluateUpdateComponent;
        let fixture: ComponentFixture<FullEvaluateUpdateComponent>;
        let service: FullEvaluateService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [FullEvaluateUpdateComponent]
            })
                .overrideTemplate(FullEvaluateUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FullEvaluateUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FullEvaluateService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new FullEvaluate(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.fullEvaluate = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new FullEvaluate();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.fullEvaluate = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
