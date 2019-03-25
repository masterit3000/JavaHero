/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { TeacherDocumentUpdateComponent } from 'app/entities/teacher-document/teacher-document-update.component';
import { TeacherDocumentService } from 'app/entities/teacher-document/teacher-document.service';
import { TeacherDocument } from 'app/shared/model/teacher-document.model';

describe('Component Tests', () => {
    describe('TeacherDocument Management Update Component', () => {
        let comp: TeacherDocumentUpdateComponent;
        let fixture: ComponentFixture<TeacherDocumentUpdateComponent>;
        let service: TeacherDocumentService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [TeacherDocumentUpdateComponent]
            })
                .overrideTemplate(TeacherDocumentUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TeacherDocumentUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TeacherDocumentService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new TeacherDocument(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.teacherDocument = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new TeacherDocument();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.teacherDocument = entity;
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
