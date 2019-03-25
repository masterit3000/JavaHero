/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { FullEvaluateDetailComponent } from 'app/entities/full-evaluate/full-evaluate-detail.component';
import { FullEvaluate } from 'app/shared/model/full-evaluate.model';

describe('Component Tests', () => {
    describe('FullEvaluate Management Detail Component', () => {
        let comp: FullEvaluateDetailComponent;
        let fixture: ComponentFixture<FullEvaluateDetailComponent>;
        const route = ({ data: of({ fullEvaluate: new FullEvaluate(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [FullEvaluateDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(FullEvaluateDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FullEvaluateDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.fullEvaluate).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
