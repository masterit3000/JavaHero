/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { TeacherDocumentComponent } from 'app/entities/teacher-document/teacher-document.component';
import { TeacherDocumentService } from 'app/entities/teacher-document/teacher-document.service';
import { TeacherDocument } from 'app/shared/model/teacher-document.model';

describe('Component Tests', () => {
    describe('TeacherDocument Management Component', () => {
        let comp: TeacherDocumentComponent;
        let fixture: ComponentFixture<TeacherDocumentComponent>;
        let service: TeacherDocumentService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [TeacherDocumentComponent],
                providers: []
            })
                .overrideTemplate(TeacherDocumentComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TeacherDocumentComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TeacherDocumentService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new TeacherDocument(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.teacherDocuments[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
