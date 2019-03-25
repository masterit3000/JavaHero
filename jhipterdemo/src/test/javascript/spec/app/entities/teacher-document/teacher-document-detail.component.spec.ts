/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { TeacherDocumentDetailComponent } from 'app/entities/teacher-document/teacher-document-detail.component';
import { TeacherDocument } from 'app/shared/model/teacher-document.model';

describe('Component Tests', () => {
    describe('TeacherDocument Management Detail Component', () => {
        let comp: TeacherDocumentDetailComponent;
        let fixture: ComponentFixture<TeacherDocumentDetailComponent>;
        const route = ({ data: of({ teacherDocument: new TeacherDocument(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [TeacherDocumentDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TeacherDocumentDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TeacherDocumentDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.teacherDocument).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
