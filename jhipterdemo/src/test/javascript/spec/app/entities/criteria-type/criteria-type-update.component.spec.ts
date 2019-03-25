/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaTypeUpdateComponent } from 'app/entities/criteria-type/criteria-type-update.component';
import { CriteriaTypeService } from 'app/entities/criteria-type/criteria-type.service';
import { CriteriaType } from 'app/shared/model/criteria-type.model';

describe('Component Tests', () => {
    describe('CriteriaType Management Update Component', () => {
        let comp: CriteriaTypeUpdateComponent;
        let fixture: ComponentFixture<CriteriaTypeUpdateComponent>;
        let service: CriteriaTypeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaTypeUpdateComponent]
            })
                .overrideTemplate(CriteriaTypeUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CriteriaTypeUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CriteriaTypeService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new CriteriaType(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.criteriaType = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new CriteriaType();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.criteriaType = entity;
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
