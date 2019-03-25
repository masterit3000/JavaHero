/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { HeadQuaterUpdateComponent } from 'app/entities/head-quater/head-quater-update.component';
import { HeadQuaterService } from 'app/entities/head-quater/head-quater.service';
import { HeadQuater } from 'app/shared/model/head-quater.model';

describe('Component Tests', () => {
    describe('HeadQuater Management Update Component', () => {
        let comp: HeadQuaterUpdateComponent;
        let fixture: ComponentFixture<HeadQuaterUpdateComponent>;
        let service: HeadQuaterService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [HeadQuaterUpdateComponent]
            })
                .overrideTemplate(HeadQuaterUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(HeadQuaterUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HeadQuaterService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new HeadQuater(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.headQuater = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new HeadQuater();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.headQuater = entity;
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
