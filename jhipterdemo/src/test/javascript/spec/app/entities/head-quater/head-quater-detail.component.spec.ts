/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { HeadQuaterDetailComponent } from 'app/entities/head-quater/head-quater-detail.component';
import { HeadQuater } from 'app/shared/model/head-quater.model';

describe('Component Tests', () => {
    describe('HeadQuater Management Detail Component', () => {
        let comp: HeadQuaterDetailComponent;
        let fixture: ComponentFixture<HeadQuaterDetailComponent>;
        const route = ({ data: of({ headQuater: new HeadQuater(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [HeadQuaterDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(HeadQuaterDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(HeadQuaterDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.headQuater).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
