/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaEvaluateUpdateComponent } from 'app/entities/criteria-evaluate/criteria-evaluate-update.component';
import { CriteriaEvaluateService } from 'app/entities/criteria-evaluate/criteria-evaluate.service';
import { CriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';

describe('Component Tests', () => {
    describe('CriteriaEvaluate Management Update Component', () => {
        let comp: CriteriaEvaluateUpdateComponent;
        let fixture: ComponentFixture<CriteriaEvaluateUpdateComponent>;
        let service: CriteriaEvaluateService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaEvaluateUpdateComponent]
            })
                .overrideTemplate(CriteriaEvaluateUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CriteriaEvaluateUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CriteriaEvaluateService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new CriteriaEvaluate(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.criteriaEvaluate = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new CriteriaEvaluate();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.criteriaEvaluate = entity;
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
